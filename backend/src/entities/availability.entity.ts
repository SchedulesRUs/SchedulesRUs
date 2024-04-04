import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Type } from 'class-transformer';

class DailySchedule {
  Monday?: TimeSlot;
  Tuesday?: TimeSlot;
  Wednesday?: TimeSlot;
  Thursday?: TimeSlot;
  Friday?: TimeSlot;
  Saturday?: TimeSlot;
  Sunday?: TimeSlot;
}

class TimeSlot {
  startTime: string;
  endTime: string;
}

@Entity()
export default class Availability {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  username: string;

  @Column()
  userColor: string;

  @Column()
  durationStart: string;

  @Column()
  durationEnd: string;

  @Column('simple-json', { nullable: true })
  @Type(() => DailySchedule)
  dailySchedule?: DailySchedule;
}
