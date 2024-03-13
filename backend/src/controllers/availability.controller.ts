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
import { CreateAvailabilityDto } from 'src/dto/create-availability.dto';

@Controller('availability')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Get()
  getAvailability() {
    return this.availabilityService.getAvailability();
  }

  @Post()
  createAvailability(@Body() creatAvailability: CreateAvailabilityDto) {
    return this.availabilityService.createAvailability(creatAvailability);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.availabilityService.removeAvailabilityById(id);
  }
}
