export interface IOrderEntity {
  readonly id: number;

  readonly address: string;

  readonly orderDate: Date;

  readonly totalCost: number;

  readonly totalDiscount: number;

  readonly userId: number;
}
