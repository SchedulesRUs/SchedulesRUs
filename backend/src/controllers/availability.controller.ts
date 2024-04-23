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
} from '@nestjs/common';
import { AvailabilityService } from '../services/availability.service';
import { SetAvailabilityDto } from '../dto/set-availability.dto';

@Controller('availability')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Get()
  getAvailability() {
    return this.availabilityService.getAvailability();
  }

  @Get(':userId')
  getAvailabilityByUserId(@Param('userId') userId: number) {
    return this.availabilityService.getAvailabilityByUserId(userId);
  }

  @Post()
  setAvailability(@Body() setAvailability: SetAvailabilityDto) {
    return this.availabilityService.setAvailability(setAvailability);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.availabilityService.removeAvailabilityById(id);
  }
}
