import { ApiProperty } from '@nestjs/swagger';
import { IOrderEntity } from '../inrerfaces/order-entity.interface';

export class OrderEntityResponse {
  @ApiProperty({ example: 1 })
  public readonly id: number;

  @ApiProperty({ example: 'Kyiv, Ukraine' })
  public readonly address: string;

  @ApiProperty({ example: '2023-12-12T12:12:12.000Z' })
  public readonly orderDate: Date;

  @ApiProperty({ example: 100 })
  public readonly totalCost: number;

  @ApiProperty({ example: 10 })
  public readonly totalDiscount: number;

  @ApiProperty({ example: 14 })
  public readonly userId: number;

  constructor(order: IOrderEntity) {
    Object.assign(this, order);
  }
}
