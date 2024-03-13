// src/controllers/request.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  HttpException,
  HttpStatus,
  Delete,
  Param,
  Logger,
} from '@nestjs/common';
import { RequestService } from '../services/request.service';
import { NotificationService } from 'src/services/notification.service';

@Controller('request')
export class RequestController {
  constructor(
    private readonly requestService: RequestService,
    private readonly notificationService: NotificationService,
  ) {}

  @Get()
  getRequest() {
    return this.requestService.getRequest();
  }

  @Post()
  createRequest(@Body() createRequestDto: any) {
    return this.requestService.createRequest(createRequestDto);
  }

  @Post('update-request')
  async updateRequestStatus(
    @Query('id') id: number,
    @Query('newStatus') newStatus: string,
  ) {
    try {
      const updatedRequest = await this.requestService.updateStatusById(
        id,
        newStatus,
      );
      const request = await this.requestService.getRequestById(id);
      await this.notificationService.sendBookOffStatusChanged(
        request[0].user_id,
        newStatus,
        request[0].start,
        request[0].end,
      );

      const response: RequestRespond = {
        success: true,
        requestId: updatedRequest.id,
        error: '',
      };
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

// Other methods for managing requests

interface RequestRespond {
  success: boolean;
  requestId: number;
  error: string;
}
