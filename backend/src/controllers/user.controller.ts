// src/controllers/user.controller.ts
import { Controller, Get ,Post,Body} from '@nestjs/common';
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
}
