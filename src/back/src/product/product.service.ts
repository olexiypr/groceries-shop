import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../product/entities/product.entity';
import { Repository } from 'typeorm';
import { ICountedProducts } from './interfaces/counted-products.interface';
import { IProductEntity } from './interfaces/product-entity.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}

  public async findAndCountMany(
    limit?: number,
    offset?: number
  ): Promise<ICountedProducts> {
    const [products, count] = await this.productRepository.findAndCount({
      skip: offset || 0,
      take: limit || Number.MAX_SAFE_INTEGER
    });

    return {
      count,
      products
    };
  }

  public async findById(id: number): Promise<IProductEntity> {
    return this.productRepository.findOne({
      where: {
        id
      }
    });
  }
}
