// src/controllers/user.controller.ts
import { Controller, Get ,Post,Body,Query, HttpException, HttpStatus, Delete, Param} from '@nestjs/common';
import { RequestService } from '../services/request.service';
import Request from '../entities/request.enity';


@Controller('request')
export class UserController {
  constructor(private readonly requestService: RequestService) {}

  @Get()
  getUsers() {
    return this.requestService.getRequest();
  }

  @Post()
  createRequest(@Body() createRequestDto: any) {
    return this.requestService.createRequest(createRequestDto);
  }

//   @Delete(':id')
//   remove(@Param('id') id: number) {
//     return this.requestService.removeUserById(id);
//   }

}


class RequestRespond {
  success: boolean;
  error:String;
  username: string;
}
