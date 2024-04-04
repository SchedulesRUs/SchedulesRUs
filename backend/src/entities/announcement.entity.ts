import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Announcement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  date: string;

  @Column({ nullable: true })
  detail: string;
}
