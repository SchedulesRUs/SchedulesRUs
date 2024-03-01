// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { UserService } from './services/user.service';
import { ScheduleInfoService } from './services/scheduleInfo.service';
import { DatabaseModule } from './database/database.module.js';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { ScheduleInfoController } from './controllers/scheduleInfo.controller';
import { ScheduleInfoRepository } from './repositories/scheduleInfo.repository';
import User from './entities/user.entity';
import ScheduleInfo from './entities/scheduleInfo.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([User, ScheduleInfo]),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // optional, if you are using environment variables
    }),
  ],
  controllers: [AppController, UserController, ScheduleInfoController],
  providers: [
    AppService,
    UserService,
    ScheduleInfoService,
    UserRepository,
    ScheduleInfoRepository,
  ],
})
export class AppModule {}
