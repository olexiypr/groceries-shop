import { IsArray, IsNumber, IsString } from 'class-validator';
import { OrderedProductSchema } from './ordered-product.schema';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderSchema {
  @IsNumber()
  @ApiProperty({ example: 100 })
  public readonly totalCost: number;

  @IsNumber()
  @ApiProperty({ example: 10 })
  public readonly totalDiscount: number;

  @IsString()
  @ApiProperty({ example: 'Kyiv, Ukraine' })
  public readonly address: string;

  @IsArray()
  @ApiProperty({ type: [OrderedProductSchema] })
  public readonly products: OrderedProductSchema[];
}
