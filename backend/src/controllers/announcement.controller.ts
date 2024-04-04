import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { AnnouncementService } from 'src/services/announcement.service';
import { AnnouncementDto } from 'src/dto/create-announcement.dto';

@Controller('announcement')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Get()
  getAnnouncementService() {
    return this.announcementService.getAnnouncement();
  }

  @Post()
  createAnnouncement(@Body() announcement: AnnouncementDto) {
    return this.announcementService.createAnnouncement(announcement);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.announcementService.removeAnnouncementById(id);
  }
}
