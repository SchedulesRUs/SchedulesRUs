import { Repository } from 'typeorm';
import ScheduleInfo from '../entities/scheduleInfo.entity';

export class ScheduleInfoRepository extends Repository<ScheduleInfo> {
    async findAll(): Promise<ScheduleInfo[]> {
        return this.find();
      }
    
}