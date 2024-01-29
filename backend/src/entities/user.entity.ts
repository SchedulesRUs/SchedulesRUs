import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

//After modifying your entity, remember to synchronize your database schema using TypeORM:
//npx typeorm schema:sync

}