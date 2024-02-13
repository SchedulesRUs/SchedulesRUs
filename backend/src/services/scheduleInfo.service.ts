import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ScheduleInfo from 'src/entities/scheduleInfo.entity';

@Injectable()
export class ScheduleInfoService {
  constructor(
    @InjectRepository(ScheduleInfo)
    private readonly scheduleInfoRepository: Repository<ScheduleInfo>,
  ) {}

  async getScheduleInfo(): Promise<ScheduleInfo[]> {
    try {
      return await this.scheduleInfoRepository.find();
    } catch (error) {
      // Handle database errors gracefully
      throw new Error(`Unable to fetch schedule information: ${error.message}`);
    }
  }

  async createScheduleInfo(createScheduleInfoDto: any): Promise<ScheduleInfo[]> {
    const newSchedule = this.scheduleInfoRepository.create({ ...createScheduleInfoDto });
    return this.scheduleInfoRepository.save(newSchedule);
  }
}
