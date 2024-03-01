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
  color: string;

  @Column({ nullable: true })
  start: string;

  @Column({ nullable: true })
  end: string;

  //After modifying your entity, remember to synchronize your database schema using TypeORM:
  //npx typeorm schema:sync
}
