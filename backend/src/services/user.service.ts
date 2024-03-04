// user.service.ts
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
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

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  
  async findOne(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return user;
    } catch (error) {
      throw error;
    }
  }

  async removeUserById(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async createUser(createUserDto: any): Promise<User[]> {
    const userColor = generateHexColor();
    const newUser = this.userRepository.create({
      ...createUserDto,
      userColor: userColor,
    });
    return this.userRepository.save(newUser);
  }

  async validateLogin(username: string, password: string): Promise<User> {
    try {
      console.log('Received credentials:', username, password);
      const user = await this.userRepository.findOne({ where: { username } });

      if (!user) {
        console.log('User not found');
        throw new NotFoundException('User not found');
      }

      // Here, you would compare the plain-text password provided by the user
      // with the hashed password stored in the user record using a secure method
      // For example, you can use a different hashing algorithm like SHA-256

      // Example of comparing passwords without bcrypt (not recommended for production)
      if (password !== user.password) {
        console.log('Invalid password');
        throw new UnauthorizedException('Invalid password');
      }

      console.log('Login successful');
      return user;
    } catch (error) {
      console.error('Error during login validation:', error);
      throw error; // Rethrow the error for further analysis
    }
  }
}
function generateHexColor(): string {
  // Generate random RGB values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Convert RGB to hex
  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');

  // Concatenate and return hex color
  return `#${hexR}${hexG}${hexB}`;
}
