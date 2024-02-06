// user.service.ts
import { Injectable , NotFoundException, UnauthorizedException} from '@nestjs/common';
import User from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'; // Add bcrypt for password hashing


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

  async createUser(createUserDto: any): Promise<User[]> {
    const { password, ...rest } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 6); // Adjust the salt rounds as needed
    const userColor = generateHexColor()
    const newUser = this.userRepository.create({ ...rest, password: hashedPassword, userColor:userColor });
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
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
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