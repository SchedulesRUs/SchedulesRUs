import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Availability from 'src/entities/availability.entity';
import { UserService } from './user.service';
import { SetAvailabilityDto } from 'src/dto/set-availability.dto';

@Injectable()
export class AvailabilityService {
  constructor(
    @InjectRepository(Availability)
    private readonly availabilityRepository: Repository<Availability>,
    private readonly userService: UserService,
  ) {}

  async getAvailability(): Promise<Availability[]> {
    return this.availabilityRepository.find();
  }

  async getAvailabilityById(userId: number): Promise<Availability | null> {
    return this.availabilityRepository.findOneBy({ userId });
  }

  async findOne(id: number): Promise<Availability | null> {
    return this.availabilityRepository.findOneBy({ id });
  }
  async setAvailability(setAvailbilityDto: SetAvailabilityDto) {
    try {
      const user = await this.userService.findOne(setAvailbilityDto.userId);
      const newAvailability = this.availabilityRepository.create({
        ...setAvailbilityDto,
        username: user.username,
        userColor: user.userColor
      });
      return this.availabilityRepository.save(newAvailability);
    } catch (error) {
      return error;
    }
  }

  async removeAvailabilityById(id: number): Promise<void> {
    await this.availabilityRepository.delete(id);
  }
}
