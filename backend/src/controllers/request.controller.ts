// src/controllers/request.controller.ts
import { Controller, Get ,Post,Body,Query, HttpException, HttpStatus, Delete, Param} from '@nestjs/common';
import { RequestService } from '../services/request.service';


@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get()
  getRequest() {
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
