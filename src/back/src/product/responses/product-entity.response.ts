import { ApiProperty } from '@nestjs/swagger';
import { IProductEntity } from '../interfaces/product-entity.interface';

export class ProductEntityResponse {
  @ApiProperty({ example: 1 })
  public readonly id: number;

  @ApiProperty({ example: 'Product name' })
  public readonly name: string;

  @ApiProperty({ example: 'Product type' })
  public readonly type: string;

  @ApiProperty({ example: 100 })
  public readonly price: number;

  @ApiProperty({ example: 10 })
  public readonly discount: number;

  @ApiProperty({ example: 'Product image' })
  public readonly image: string;

  @ApiProperty({ example: 'Product description' })
  public readonly description: string;

  @ApiProperty({ example: 'Product additional info' })
  public readonly additionalInfo: string;

  @ApiProperty({ example: 'Product overview' })
  public readonly overview: string;

  constructor(product: IProductEntity) {
    Object.assign(this, product);
  }
}
