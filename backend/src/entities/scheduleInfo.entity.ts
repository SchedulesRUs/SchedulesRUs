import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class ScheduleInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;
  
  @Column()
  title: string;
  
  @Column({ nullable: true })
  allDay: boolean;

  @Column({ nullable: true })
  color: String;

  @Column({ nullable: true })
  start: String;
  
  @Column({ nullable: true })
  end: String;


//After modifying your entity, remember to synchronize your database schema using TypeORM:
//npx typeorm schema:sync

}