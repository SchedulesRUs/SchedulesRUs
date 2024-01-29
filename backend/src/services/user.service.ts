// user.service.ts
import { Injectable } from '@nestjs/common';
import User from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  // private users = ['This my this text'];
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  // getUsers() {
  //   return this.users;
  // }

  // createUser(createUserDto: any) {
  //   this.users.push(createUserDto);
  //   return createUserDto;
  // }
  
  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(createUserDto: any): Promise<User[]> {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  // async createUser(createUserDto: any): Promise<User> {
  //   // const newUser = this.userRepository.create(createUserDto);
  //   // return this.userRepository.save(newUser);
  // }
}
