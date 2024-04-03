import { Repository } from 'typeorm';
import Announcement from 'src/entities/announcement.entity';

export class AnnouncementRepository extends Repository<Announcement> {
  async findAll(): Promise<Announcement[]> {
    return this.find();
  }
  async findById(id: number): Promise<Announcement | undefined> {
    return this.findOne({ where: { id } });
  }
}
