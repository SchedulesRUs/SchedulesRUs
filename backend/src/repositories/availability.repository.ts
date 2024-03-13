import { Repository } from 'typeorm';
import Availability from 'src/entities/availability.entity';

export class AvailabilityRepository extends Repository<Availability> {
  async findAll(): Promise<Availability[]> {
    return this.find();
  }
  async findByUserId(user_id: number): Promise<Availability | undefined> {
    return this.findOne({ where: { user_id } });
  }
}
