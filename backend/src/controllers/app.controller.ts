import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { NotificationService } from 'src/services/notification.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly notificationService: NotificationService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    this.notificationService.sendTestNotification();
    return this.appService.getHello();
  }
}
