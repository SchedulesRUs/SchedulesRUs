// database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ScheduleInfo from '../entities/scheduleInfo.entity';
import User from '../entities/user.entity';
import Request from '../entities/request.entity';
import Availability from '../entities/availability.entity';
import Announcement from '../entities/announcement.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: 'postgres',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [User, ScheduleInfo, Request, Availability, Announcement],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class DatabaseModule {}
