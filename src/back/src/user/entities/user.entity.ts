import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../../order/enrtities/order.entity';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  public readonly id: number;

  @Column()
  public readonly name: string;

  @Column({ unique: true })
  public readonly email: string;

  @Column()
  public readonly password: string;

  @Column({ nullable: true })
  public readonly phone?: string;

  @Column({ nullable: true })
  public readonly address?: string;

  @Column({ default: false, nullable: true })
  public readonly isVerified: boolean;

  @OneToMany(() => Order, (order) => order.user)
  public orders: Order[];
}
