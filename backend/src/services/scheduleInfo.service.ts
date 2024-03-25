import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import ScheduleInfo from 'src/entities/scheduleInfo.entity';
import { UpdateScheduleDto } from 'src/dto/update-schedule.dto';
import { CreateScheduleDto } from 'src/dto/create-schedule.dto';

@Injectable()
export class ScheduleInfoService {
  constructor(
    @InjectRepository(ScheduleInfo)
    private readonly scheduleInfoRepository: Repository<ScheduleInfo>,
  ) {}

  getScheduleInfo(): Promise<ScheduleInfo[]> {
    try {
      return this.scheduleInfoRepository.find();
    } catch (error) {
      throw new Error(`Unable to fetch schedule information: ${error.message}`);
    }
  }

  findOne(id: number): Promise<ScheduleInfo | null> {
    return this.scheduleInfoRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateScheduleDto: UpdateScheduleDto,
    start: string,
    end: string,
  ) {
    return await this.scheduleInfoRepository.update(id, {
      ...updateScheduleDto,
      start,
      end,
    });
  }

  async createScheduleInfo(createScheduleInfoDto: CreateScheduleDto) {
    const newScheduleInfo = this.scheduleInfoRepository.create(
      createScheduleInfoDto,
    );

    return this.scheduleInfoRepository.save(newScheduleInfo);
  }

  async removeScheduleById(id: number): Promise<void> {
    await this.scheduleInfoRepository.delete(id);
  }

  // async getScheduleByUserId(userId: number): Promise<ScheduleInfo[]> {
  //   try {
  //     return this.scheduleInfoRepository.find({ where: { userId } });
  //   } catch (error) {
  //     throw new Error(`Unable to fetch schedule information for user ${userId}: ${error.message}`);
  //   }
  // }
}
