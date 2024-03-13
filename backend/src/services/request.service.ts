import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Request from '../entities/request.entity';
import { UserService } from './user.service';
import e from 'express';
import { NotificationService } from './notification.service';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private readonly requestRepository: Repository<Request>,
    private readonly userService: UserService,
  ) {}

  async getRequest(): Promise<Request[]> {
    return this.requestRepository.find();
  }

  async getRequestById(requestId: number): Promise<Request[]> {
    return this.requestRepository.findBy({ id: requestId });
  }

  async findOneRequest(user_id: number): Promise<Request | null> {
    return this.requestRepository.findOneBy({ user_id });
  }

  async updateStatusById(id: number, newStatus: string): Promise<Request> {
    const request = await this.requestRepository.findOneBy({ id });

    if (!request) {
      throw new NotFoundException('Request not found');
    }

    request.status = newStatus;

    return this.requestRepository.save(request);
  }

  async createRequest(createRequestDto: any): Promise<Request[]> {
    try {
      const user = await this.userService.findOne(createRequestDto.user_id);
      if (!user) {
        throw new NotFoundException('User not found');
      }

      const created_date = this.formatDate(new Date());
      const newRequest = this.requestRepository.create({
        ...createRequestDto,
        status: 'Pending',
        username: user.username,
        created_date: created_date,
      });
      return this.requestRepository.save(newRequest);
    } catch (error) {
      return error;
    }
  }
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
