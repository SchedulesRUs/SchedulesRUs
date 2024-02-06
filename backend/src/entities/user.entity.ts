import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
  
  @Column()
  email: string;

  @Column({ nullable: true }) 
  phone: string;

  @Column({ nullable: true }) 
  isAdmin: string;

  @Column({ nullable: true }) 
  isActive: string;

  @Column({ nullable: true }) 
  address: string;

  @Column()
  userColor:string

//After modifying your entity, remember to synchronize your database schema using TypeORM:
//npx typeorm schema:sync

}