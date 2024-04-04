import { Injectable, Logger } from '@nestjs/common';
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

  async getAvailabilityByUserId(userId: number): Promise<Availability | null> {
    return this.availabilityRepository.findOneBy({ userId: userId });
  }

  async findOne(id: number): Promise<Availability | null> {
    return this.availabilityRepository.findOneBy({ id });
  }

  async setAvailability(setAvailabilityDto: SetAvailabilityDto) {
    try {
      const user = await this.userService.findOne(setAvailabilityDto.userId);
      let availability = await this.getAvailabilityByUserId(user.id);

      if (availability) {
        // If it exists, update the existing availability
        availability = this.availabilityRepository.merge(availability, {
          ...setAvailabilityDto,
          username: user.username,
          userColor: user.userColor,
        });
      } else {
        // If not, create a new availability entry
        availability = this.availabilityRepository.create({
          ...setAvailabilityDto,
          username: user.username,
          userColor: user.userColor,
        });
      }

      // Save the availability entry
      return await this.availabilityRepository.save(availability);
    } catch (error) {
      return error;
    }
  }

  async removeAvailabilityById(id: number): Promise<void> {
    await this.availabilityRepository.delete(id);
  }
}
