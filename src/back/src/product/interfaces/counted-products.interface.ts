import { IProductEntity } from './product-entity.interface';

export interface ICountedProducts {
  readonly products: IProductEntity[];

  readonly count: number;
}
