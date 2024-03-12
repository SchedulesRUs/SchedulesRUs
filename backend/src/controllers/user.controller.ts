// src/controllers/user.controller.ts
import {  Controller,  Get,  Post,  Body,  Query,  Delete, Put,  Param, Patch } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
  
  @Put('getuser')
  updateUser(@Query('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    try {
      const updatedUser = this.userService.updateUser(id, updateUserDto);
      return updatedUser;
    } catch (error) {
      return "Failed to update user details";
    }
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.removeUserById(id);
  }

  @Get('getuser')
  findOne(@Query('id') id: number) {
    try {
    const user = this.userService.findOne(id)
    return user
    }
  catch (error) {
    return "User Not Found"
    }
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
      loginResponse.userid = user.id;
      return loginResponse;
    } catch (error) {
      // Handle validation errors
      const loginResponse = new LoginRespond();
      loginResponse.success = false;
      loginResponse.error = error.message || 'Invalid credentials'; // Assuming you want to leave the error field empty for a successful login
      loginResponse.username = username;
      return loginResponse;
    }
  }
}

class LoginRespond {
  success: boolean;
  error: String;
  username: string;
  userid: number|null;
}
