import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './services/order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/order/enrtities/order.entity';
import { OrderProduct } from 'src/order/enrtities/order-product.entity';
import { UserModule } from 'src/user/user.module';
import { ProductModule } from 'src/product/product.module';
import { OrderProductService } from './services/product-order.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderProductService],
  imports: [
    TypeOrmModule.forFeature([Order, OrderProduct]),
    UserModule,
    ProductModule
  ]
})
export class OrderModule {}
