// src/controllers/user.controller.ts
import { Controller, Get, Post, Body, Query, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { ScheduleInfoService } from '../services/scheduleInfo.service';

import ScheduleInfo from '../entities/scheduleInfo.entity';


@Controller('ScheduleInfo')
export class ScheduleInfoController {
  constructor(private readonly ScheduleInfoService: ScheduleInfoService) { }

  @Get()
  getScheduleInfoService() {
    return [
      {
        "id": 76,
        "userId": 5,
        "title": "Khit",
        "allDay": false,
        "color": "#ff5733",
        "start": "2024-02-09T15:00:00.000Z",
        "end": "2024-02-09T24:00:00.000Z"
      },
      {
        "id": 77,
        "userId": 5,
        "title": "Don",
        "allDay": false,
        "color": "#ff5733",
        "start": "2024-02-09T15:00:00.000Z",
        "end": "2024-02-09T24:00:00.000Z"
      },
      {
        "id": 78,
        "userId": 38,
        "title": "Felix",
        "allDay": true,
        "color": "#a133ff",
        "start": "2024-02-07T07:00:00.000Z",
        "end": "2024-02-07T07:00:00.000Z"
      }
    ]
  }

  @Post('createSchedule')
  createScheduleInfo(@Body() createScheduleDto: any) {
    return this.ScheduleInfoService.createScheduleInfo(createScheduleDto);
  }


}

class LoginRespond {
  success: boolean;
  error: String;
  username: string;
}
