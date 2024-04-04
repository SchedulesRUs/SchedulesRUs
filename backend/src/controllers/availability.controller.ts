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
import { AvailabilityService } from 'src/services/availability.service';
import { SetAvailabilityDto } from 'src/dto/set-availability.dto';

@Controller('availability')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Get()
  getAvailability() {
    return this.availabilityService.getAvailability();
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
