import { ApiProperty } from '@nestjs/swagger';
import { IProductEntity } from '../interfaces/product-entity.interface';
import { ProductEntityResponse } from './product-entity.response';

export class ProductEntitiesResponse {
  @ApiProperty({ type: [ProductEntityResponse] })
  public readonly products: IProductEntity[];

  constructor(products: IProductEntity[]) {
    this.products = products.map(
      (product) => new ProductEntityResponse(product)
    );
  }
}
