import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Availability from 'src/entities/availability.entity';
import { UserService } from './user.service';
import { CreateAvailabilityDto } from 'src/dto/create-availability.dto';
import { UpdateAvailabilityDto } from 'src/dto/update-availability.dto';

@Injectable()
export class AvailabilityService {
  constructor(
    @InjectRepository(Availability)
    private readonly availabilityRepository: Repository<Availability>,
    private readonly userService : UserService
  ) {}

  async getAvailability(): Promise<Availability[]> {
    return this.availabilityRepository.find();
  }

  async getAvailabilityById(user_id: number): Promise<Availability | null> {
    return this.availabilityRepository.findOneBy({ user_id });
  }

  async findOne(id: number): Promise<Availability | null> {
    return this.availabilityRepository.findOneBy({ id });
  }
  async createAvailability(createAvailbilityDto: CreateAvailabilityDto) {
    try {
      const user = await this.userService.findOne(createAvailbilityDto.user_id);
      const newAvailability = this.availabilityRepository.create({...createAvailbilityDto, title: user.username});
      return this.availabilityRepository.save(newAvailability);
    }
    catch (error) {
      return error
    }
  }

  async removeAvailabilityById(id: number): Promise<void> {
    await this.availabilityRepository.delete(id);
  }

  async updateAvailability(id: number, updateAvailabilityDto: UpdateAvailabilityDto) {
    const user = await this.findOne(id);
    const updatedAvailability = { ...user, ...updateAvailabilityDto };
    return this.availabilityRepository.save(updatedAvailability);
  }

}