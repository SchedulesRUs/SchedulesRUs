import { Repository } from 'typeorm';
import Availability from 'src/entities/availability.entity';

export class AvailabilityRepository extends Repository<Availability> {
  async findAll(): Promise<Availability[]> {
    return this.find();
  }
  async findByUserId(userId: number): Promise<Availability | undefined> {
    return this.findOne({ where: { userId } });
  }
}
