import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { OrderProduct } from './order-product.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  public readonly id: number;

  @Column()
  public readonly address: string;

  @Column()
  public readonly orderDate: Date;

  @Column()
  public readonly totalCost: number;

  @Column()
  public readonly totalDiscount: number;

  @Column()
  public readonly userId: number;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  public user: User;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order)
  public products: OrderProduct[];
}
