// database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '(localdb)\MSSQLLocalDB',
      port: 1433,
      database: 'ScheduleRUs',
      entities: [],
      synchronize: true,
    } ),
  ],
})
export class DatabaseModule {}
