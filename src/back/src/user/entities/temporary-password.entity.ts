import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class TemporaryPassword {
  @PrimaryGeneratedColumn()
  public readonly id: number;

  @Column()
  public readonly password: string;

  @Column({ type: 'timestamp with time zone' })
  public readonly expiresAt: Date;

  @OneToOne(() => User)
  @JoinColumn()
  public user: User;
}
