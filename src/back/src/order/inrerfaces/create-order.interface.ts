import { IOrderedProduct } from './ordered-products.interface';

export interface ICreateOrder {
  readonly email: string;

  readonly totalCost: number;

  readonly totalDiscount: number;

  readonly address: string;

  readonly products: IOrderedProduct[];
}
