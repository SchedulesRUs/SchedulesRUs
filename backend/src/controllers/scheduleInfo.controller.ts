// src/controllers/user.controller.ts
import { Controller, Get ,Post,Body,Query, HttpException, HttpStatus} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { ScheduleInfoService } from '../services/scheduleInfo.service';

import ScheduleInfo from '../entities/scheduleInfo.entity';


@Controller('ScheduleInfo')
export class ScheduleInfoController {
  constructor(private readonly ScheduleInfoService: ScheduleInfoService) {}

  @Get()
  getScheduleInfoService() {
    return this.ScheduleInfoService.getScheduleInfo();
  }

  @Post('createSchedule')
  createScheduleInfo(@Body() createScheduleDto: any) {
    return this.ScheduleInfoService.createScheduleInfo(createScheduleDto);
  }


}

class LoginRespond {
  success: boolean;
  error:String  ;
  username: string;
}
