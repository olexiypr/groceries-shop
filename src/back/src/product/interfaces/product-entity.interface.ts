export interface IProductEntity {
  readonly id: number;

  readonly name: string;

  readonly type: string;

  readonly price: number;

  readonly discount: number;

  readonly image: string;

  readonly description: string;

  readonly additionalInfo: string;

  readonly overview: string;
}
