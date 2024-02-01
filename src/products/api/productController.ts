import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductListResponse } from '../application/dto/productListResponseDto';
import { ProductDetailResponse } from '../application/dto/productDetailResponseDto';
import { ProductApplication } from '../application/ProductApplication';

@Controller('api/items')
export class ProductController {
  constructor(private readonly productService: ProductApplication) {}

  @Get()
  async getProductsByQuery(@Query('q') query: string): Promise<ProductListResponse> {
    return await this.productService.getProductsByQuery(query);
  }

  @Get(':id')
  getProductDetailsById(@Param('id') id: string): Promise<ProductDetailResponse> {
    return this.productService.getProductDetailsById(id);
  }
}