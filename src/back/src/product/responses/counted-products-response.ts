import { ApiProperty } from '@nestjs/swagger';
import { ProductEntitiesResponse } from './product-entities.response';
import { ICountedProducts } from '../interfaces/counted-products.interface';

export class CountedProductsResponse extends ProductEntitiesResponse {
  @ApiProperty({ example: 1 })
  public readonly count: number;

  constructor(counted: ICountedProducts) {
    super(counted.products);

    this.count = counted.count;
  }
}
