import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { UserService } from './services/user.service';
import { ScheduleInfoService } from './services/scheduleInfo.service';
import { RequestService } from './services/request.service';

import { DatabaseModule } from './database/database.module.js';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { ScheduleInfoController } from './controllers/scheduleInfo.controller';
import { ScheduleInfoRepository } from './repositories/scheduleInfo.repository';
import { RequestController } from './controllers/request.controller';
import { RequestRepository } from './repositories/request.repository';
import User from './entities/user.entity';
import ScheduleInfo from './entities/scheduleInfo.entity';
import Request from './entities/request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([User, ScheduleInfo, Request]),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // optional, if you are using environment variables
    }),
  ],
  controllers: [AppController, UserController, ScheduleInfoController, RequestController],
  providers: [
    AppService,
    UserService,
    ScheduleInfoService,
    UserRepository,
    ScheduleInfoRepository,
    RequestRepository,
    RequestService,
  ],
})
export class AppModule {}
