
import { Column, Entity, IntegerType, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Request {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  
  @Column({ nullable: true })
  date:string;
    
  @Column({ nullable: true })
  start:string;
    
  @Column({ nullable: true })
  end:string;

      
  @Column({ nullable: true })
  reason:string;

  @Column()
  status:string;

  @Column()
  username:string;

//After modifying your entity, remember to synchronize your database schema using TypeORM:
//npx typeorm schema:sync

}