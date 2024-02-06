import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class ScheduleInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  allDay: boolean;

  @Column()
  backgroundColor: string;

  @Column()
  borderColor: String;

  @Column()
  start: boolean;
  
  @Column()
  end: boolean;

  @Column()
  title: string;
  

//After modifying your entity, remember to synchronize your database schema using TypeORM:
//npx typeorm schema:sync

}