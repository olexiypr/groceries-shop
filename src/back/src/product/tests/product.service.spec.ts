import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';
import { generateRandomProduct } from './utils/generate-random-product.util';
import { ProductService } from '../product.service';
import { Product } from '../entities/product.entity';
import { IProductEntity } from 'src/product/interfaces/product-entity.interface';

describe('ProductService', () => {
  let service: ProductService;
  let productReposiroty: Repository<Product>;

  const PRODUCT_REPO_TOKEN = getRepositoryToken(Product);

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: PRODUCT_REPO_TOKEN,
          useValue: {
            save: jest.fn(),
            find: jest.fn(),
            delete: jest.fn(),
            update: jest.fn(),
            findOne: jest.fn(),
            findAndCount: jest.fn()
          }
        }
      ]
    }).compile();

    productReposiroty = moduleRef.get(PRODUCT_REPO_TOKEN);
    service = moduleRef.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(productReposiroty).toBeDefined();
  });

  describe('findAndCountMany', () => {
    it('should find products with specified limit and offset', async () => {
      const limit = 3;
      const offset = 1;
      const randomProducts = [
        generateRandomProduct(),
        generateRandomProduct(),
        generateRandomProduct()
      ];

      jest
        .spyOn(productReposiroty, 'findAndCount')
        .mockResolvedValue([randomProducts, randomProducts.length]);

      const result = await service.findAndCountMany(limit, offset);

      expect(productReposiroty.findAndCount).toBeCalledTimes(1);
      expect(productReposiroty.findAndCount).toBeCalledWith({
        take: limit,
        skip: offset
      });

      expect(result).toEqual({
        products: randomProducts,
        count: randomProducts.length
      });
    });

    it('should find products without specified limit and offset', async () => {
      const randomProducts: IProductEntity[] = [];
      for (let i = 0; i < 10; i++) {
        randomProducts.push(generateRandomProduct());
      }

      jest
        .spyOn(productReposiroty, 'findAndCount')
        .mockResolvedValue([randomProducts, randomProducts.length]);

      const result = await service.findAndCountMany();

      expect(productReposiroty.findAndCount).toBeCalledTimes(1);
      expect(productReposiroty.findAndCount).toBeCalledWith({
        skip: 0,
        take: Number.MAX_SAFE_INTEGER
      });

      expect(result).toEqual({
        products: randomProducts,
        count: randomProducts.length
      });
    });
  });

  describe('findById', () => {
    it('should successfully find product by id', async () => {
      const id = crypto.randomInt(5, 10);
      const product = generateRandomProduct({ id });

      jest.spyOn(productReposiroty, 'findOne').mockResolvedValue(product);

      const result = await service.findById(id);

      expect(productReposiroty.findOne).toBeCalledTimes(1);
      expect(productReposiroty.findOne).toBeCalledWith({
        where: {
          id
        }
      });

      expect(result).toBe(product);
    });
  });
});
