// src/controllers/user.controller.ts
import { Controller, Get ,Post,Body,Query, HttpException, HttpStatus} from '@nestjs/common';
import { UserService } from '../services/user.service';
import User from '../entities/user.entity';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() createUserDto: any) {
    return this.userService.createUser(createUserDto);
  }

  @Get('login') // New endpoint for login
async loginUser(
  @Query('username') username: string,
  @Query('password') password: string,
): Promise<LoginRespond | string> {
  const loginResponse = new LoginRespond();
  try {
    const user = await this.userService.validateLogin(username, password);
    // If the login is successful, create a LoginRespond object
    loginResponse.success = true;
    loginResponse.error = ''; // Assuming you want to leave the error field empty for a successful login
    loginResponse.username = user.username;
    return loginResponse;
  } catch (error) {
    // Handle validation errors
    const loginResponse = new LoginRespond();
    loginResponse.success = false;
    loginResponse.error =  error.message || 'Invalid credentials';// Assuming you want to leave the error field empty for a successful login
    loginResponse.username = username;
    return loginResponse;
  }
}

}

class LoginRespond {
  success: boolean;
  error:String;
  username: string;
}
