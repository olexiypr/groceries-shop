import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  public readonly id: number;

  @Column()
  public readonly name: string;

  @Column()
  public readonly type: string;

  @Column()
  public readonly price: number;

  @Column()
  public readonly discount: number;

  @Column()
  public readonly image: string;

  @Column()
  public readonly description: string;

  @Column()
  public readonly additionalInfo: string;

  @Column()
  public readonly overview: string;
}
