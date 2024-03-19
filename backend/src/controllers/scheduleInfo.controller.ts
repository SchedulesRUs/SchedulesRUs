import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { ScheduleInfoService } from '../services/scheduleInfo.service';
import { CreateScheduleDto } from 'src/dto/create-schedule.dto';
import { UpdateScheduleDto } from 'src/dto/update-schedule.dto';
import { NotificationService } from 'src/services/notification.service';

@Controller('scheduleInfo')
export class ScheduleInfoController {
  constructor(
    private readonly scheduleInfoService: ScheduleInfoService,
    private readonly notificationService: NotificationService
    ) {}

  @Get()
  getScheduleInfoService() {
    return this.scheduleInfoService.getScheduleInfo();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.scheduleInfoService.findOne(id);
  }

  @Post()
  createScheduleInfo(@Body() createScheduleDto: CreateScheduleDto) {
    this.notificationService.sendNewScheduleAssigned(createScheduleDto.userId)
    return this.scheduleInfoService.createScheduleInfo(createScheduleDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateScheduleDto: UpdateScheduleDto,
    @Body('start') start: string,
    @Body('end') end: string,
  ) {
    return this.scheduleInfoService.update(id, updateScheduleDto, start, end);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.scheduleInfoService.removeScheduleById(id);
  }
}

class LoginRespond {
  success: boolean;
  error: String;
  username: string;
}
