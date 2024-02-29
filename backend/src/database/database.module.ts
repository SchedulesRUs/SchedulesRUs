// database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ScheduleInfo from 'src/entities/scheduleInfo.entity';
import User from 'src/entities/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      url: process.env.DATABASE_URL,
      type: 'postgres',
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [User,ScheduleInfo],
      synchronize: true,
      autoLoadEntities: true,
    } ),
  ],
})
export class DatabaseModule {}
