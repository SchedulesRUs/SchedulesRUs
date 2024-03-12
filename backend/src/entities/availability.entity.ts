import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Availability {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

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
}
