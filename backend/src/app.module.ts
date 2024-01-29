// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { UserService } from './services/user.service';
import { DatabaseModule } from './database/database.module.js';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import User from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [DatabaseModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController,UserController],
  providers: [AppService,UserService, UserRepository],
})
export class AppModule {}
