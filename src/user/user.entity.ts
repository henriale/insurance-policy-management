import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: false })
  username: string;

  @Column({ select: false })
  password: string;
}
