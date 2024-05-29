import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../../order/enrtities/order.entity';
import { Repository } from 'typeorm';
import { ICreateOrder } from '../inrerfaces/create-order.interface';
import { ProductService } from '../../product/product.service';
import { IProductEntity } from '../../product/interfaces/product-entity.interface';
import { OrderProductService } from './product-order.service';
import { IOrderProductEntity } from '../inrerfaces/order-product-entity.interface';
import { UserService } from '../../user/services/user.service';
import { IOrderEntity } from '../inrerfaces/order-entity.interface';

@Injectable()
export class OrderService {
  constructor(
    private readonly userService: UserService,
    private readonly productService: ProductService,
    private readonly orderProductService: OrderProductService,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>
  ) {}

  public async create(payload: ICreateOrder): Promise<IOrderEntity> {
    const user = await this.userService.find({
      where: {
        email: payload.email
      }
    });

    const order = this.orderRepository.create({
      userId: user.id,
      orderDate: new Date(),
      address: payload.address,
      totalCost: payload.totalCost,
      totalDiscount: payload.totalDiscount
    });

    await this.orderRepository.save(order);

    const productPromises: Promise<IProductEntity>[] = [];
    const productIds = payload.products.map((product) => product.id);

    for (const productId of productIds) {
      productPromises.push(this.productService.findById(productId));
    }
    const products = await Promise.all(productPromises);

    const orderProductPromises: Promise<IOrderProductEntity>[] = [];
    for (let i = 0; i < products.length; i++) {
      const orderProduct = this.orderProductService.create({
        orderId: order.id,
        productId: products[i].id,
        quantity: payload.products[i].quantity
      });

      orderProductPromises.push(orderProduct);
    }
    await Promise.all(orderProductPromises);

    return order;
  }
}
