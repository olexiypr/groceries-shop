import { Controller, Get, Query, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { Response } from 'express';
import { GetAllProductsSchema } from './schemas/get-all-products.schema';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CountedProductsResponse } from './responses/counted-products-response';

@Controller('api/product')
@ApiTags('Product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all')
  @ApiResponse({
    status: 200,
    type: CountedProductsResponse,
    description: 'Get all products'
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  public async getAllProducts(
    @Res() res: Response,
    @Query() query?: GetAllProductsSchema
  ): Promise<void> {
    const counted = await this.productService.findAndCountMany(
      query.limit,
      query.offset
    );

    res.send(new CountedProductsResponse(counted));
  }
}
