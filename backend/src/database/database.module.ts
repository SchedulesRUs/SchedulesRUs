// database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from 'src/entities/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host:  'schedulerus.database.windows.net',
      port: 1433,
      username:'schedulerus',
      password:'admin123@',
      database: 'schedulerus',
      logging: true,
      entities: [User],
      synchronize: true,
    } ),
  ],
})
export class DatabaseModule {}
