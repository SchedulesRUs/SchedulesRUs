import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Request from '../entities/request.entity';
import { UserService } from './user.service';
import e from 'express';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private readonly requestRepository: Repository<Request>,
    private readonly userService: UserService
  ) { }

  async getRequest(): Promise<Request[]> {
    return this.requestRepository.find();

  }

  async findOneRequest(user_id: number): Promise<Request | null> {
    return this.requestRepository.findOneBy({ user_id });
  }

  async createRequest(createRequestDto: any): Promise<Request[]> {
    try {
      const user = await this.userService.findOne(createRequestDto.user_id);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      const newRequest = this.requestRepository.create({ ...createRequestDto, status: 'Pending', username: user.username });
      return this.requestRepository.save(newRequest);
    }
    catch (error) {
      return error
    }

  }


}
