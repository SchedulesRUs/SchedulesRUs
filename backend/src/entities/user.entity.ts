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
  userColor: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  isAdmin: string;

  @Column({ nullable: true })
  role: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  fcmTokens: string;

  //After modifying your entity, remember to synchronize your database schema using TypeORM:
  //npx typeorm schema:sync
}
