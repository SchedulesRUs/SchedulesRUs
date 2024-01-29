import { Repository } from 'typeorm';
import User from '../entities/user.entity';

export class UserRepository extends Repository<User> {
    async findAll(): Promise<User[]> {
        return this.find();
      }
  //       async findByUsername(username: string): Promise<User | undefined> {
  //   return this.findOne({ where: { username } });
  // }
}