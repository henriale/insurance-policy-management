import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'policies' })
export class Policy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date' })
  end_date: Date;

  @ManyToOne(() => User, (user: User) => user.id)
  @Column()
  user_id: number;
}
