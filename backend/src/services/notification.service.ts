import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import * as admin from 'firebase-admin';
import { Logger } from '@nestjs/common';
import * as dayjs from 'dayjs';

interface Message {
  notification?: {
    title?: string;
    body?: string;
  };
  data: {
    type: string;
  };
  tokens: string[];
}

@Injectable()
export class NotificationService {
  constructor(private readonly userService: UserService) {}

  async sendTestNotification() {
    try {
      const fcmTokens = ['put your token here'];

      const message = {
        notification: {
          title: 'Test Notification Title',
          body: 'This is body',
        },
        data: {
          type: 'test',
        },
        tokens: fcmTokens,
      };

      const result = await admin.messaging().sendEachForMulticast(message);
      Logger.log('Test Notification:Payload', message);
      Logger.log('Test Notification:Result', result);
      return result;
    } catch (error) {
      return error;
    }
  }

  async sendNewScheduleAssigned(userId: number, date: string) {
    try {
      const user = await this.userService.findOne(userId);
      const fcmTokens = [user.fcmToken];

      const message = {
        notification: {
          title: 'You have been assigned to a new schdule',
          body: 'date has been assigned to you',
        },
        data: {
          type: 'new_schedule',
        },
        tokens: fcmTokens,
      };

      return await admin.messaging().sendEachForMulticast(message);
    } catch (error) {
      return error;
    }
  }

  async sendBookOffStatusChanged(
    userId: number,
    status: string,
    start: string,
    end: string,
  ) {
    try {
      const user = await this.userService.findOne(userId);
      const fcmTokens = [user.fcmToken];

      let message: Message = {
        data: {
          type: 'book_off_change',
        },
        tokens: fcmTokens,
        notification: {},
      };

      const dateFormat = 'MMMM D HH:mm:ss';
      const startFomatted = dayjs.unix(Number(start)).format(dateFormat);
      const endFomatted = dayjs.unix(Number(end)).format(dateFormat);

      switch (status) {
        case 'Approved':
          message.notification = {
            title: `Time Off Request Approved`,
            body: `Good news! Your time off request for ${startFomatted} - ${endFomatted} has been approved by your manager. Enjoy your break!`,
          };
          break;
        case 'Denied':
          message.notification = {
            title: `Time Off Request Declined`,
            body: `We're sorry to inform you that your time off request for ${startFomatted} - ${endFomatted} has been declined by your manager. Please contact your manager for more details.`,
          };
          break;
        default:
          break;
      }

      const result = await admin.messaging().sendEachForMulticast(message);
      Logger.log('Book Off Status Changed:Payload', message);
      Logger.log('Book Off Status Changed:Result', result);
      return result;
    } catch (error) {
      Logger.error(error);
      return error;
    }
  }
}
