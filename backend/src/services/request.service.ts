import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Request from '../entities/request.entity';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private readonly requestRepository: Repository<Request>,
  ) {}

  async getRequest(): Promise<Request[]> {
    return this.requestRepository.find();

  }

  async findOneRequest(user_id: number): Promise<Request| null> {
    return this.requestRepository.findOneBy({ user_id });
  }

  async createRequest(createRequestDto: any): Promise<Request[]> {
    const newRequest = this.requestRepository.create({ ...createRequestDto });
    return this.requestRepository.save(newRequest);
  }

}
