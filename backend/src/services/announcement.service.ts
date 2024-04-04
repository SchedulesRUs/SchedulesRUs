import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Announcement from 'src/entities/announcement.entity';
import { AnnouncementDto } from 'src/dto/create-announcement.dto';

@Injectable()
export class AnnouncementService {
  constructor(
    @InjectRepository(Announcement)
    private readonly announcementRepository: Repository<Announcement>,
  ) {}

  async getAnnouncement(): Promise<Announcement[]> {
    return this.announcementRepository.find();
  }

  async createAnnouncement(createAvailbilityDto: AnnouncementDto) {
      const newAnnouncement = this.announcementRepository.create(createAvailbilityDto);
      return this.announcementRepository.save(newAnnouncement);
  }

  async removeAnnouncementById(id: number): Promise<void> {
    await this.announcementRepository.delete(id);
  }

}
