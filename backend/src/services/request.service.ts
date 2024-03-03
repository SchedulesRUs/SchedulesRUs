import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Request from '../entities/request.enity';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private readonly requestRepository: Repository<Request>,
  ) {}

  getRequest(): Promise<Request[]> {
    
    try {
      return this.requestRepository.find();
    } catch (error) {
      // Handle database errors gracefully
      throw new Error(`Unable to fetch schedule information: ${error.message}`);
    }
  }

  findOneRequest(user_id: number): Promise<Request| null> {
    return this.requestRepository.findOneBy({ user_id });
  }

  async createRequest(createRequestDto: any): Promise<Request[]> {
    const newRequest = this.requestRepository.create({ ...createRequestDto });
    return this.requestRepository.save(newRequest);
  }

}
