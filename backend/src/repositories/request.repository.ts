import { Repository } from 'typeorm';
import Request from '../entities/request.entity';

export class RequestRepository extends Repository<Request> {
  async findAll(): Promise<Request[]> {
    return this.find();
  }
  async findByUsername(user_id: number): Promise<Request | undefined> {
    return this.findOne({ where: { user_id } });
  }
}
