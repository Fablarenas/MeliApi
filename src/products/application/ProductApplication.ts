import { Injectable } from '@nestjs/common';
import { IProductApplication } from './IProductApplication';
import { ProductListResponse } from './dto/productListResponseDto';
import { ProductDetailResponse } from './dto/productDetailResponseDto';
import { ProductListDto } from '../infraestructure/services/dtos/productListDto';
import { MercadoLibreService } from '../infraestructure/services/MercadoLibreService';
@Injectable()
export class ProductApplication implements IProductApplication {
  constructor(private readonly mercadoLibreService: MercadoLibreService) {}

  async getProductsByQuery(query: string): Promise<ProductListResponse> {
    const data = await this.mercadoLibreService.getProductsByQuery(query);
    return this.mapToProductListResponse(data);
  }

  async getProductDetailsById(id: string): Promise<ProductDetailResponse> {
    const detailsProduct = await this.mercadoLibreService.getProductDetails(id);
    const descriptionProduct = await this.mercadoLibreService.getProductDescription(id);
  
    return {
      author: {
        name: 'Estif Fabian',
        lastname: 'Arenas Pamplona'
      },
      item: {
        id: detailsProduct.id,
        title: detailsProduct.title,
        price: {
          currency: detailsProduct.currency_id,
          amount: detailsProduct.price,
          decimals: 0,
        },
        picture: detailsProduct.thumbnail,
        condition: detailsProduct.condition,
        free_shipping: detailsProduct.shipping.free_shipping,
        sold_quantity: detailsProduct.initial_quantity,
        description: descriptionProduct.plain_text
      }
    };
  }
  

private mapToProductListResponse(data: ProductListDto): ProductListResponse {
  const categories = data.available_filters.find((filter: any) => filter.id === 'category')
  const categoryNames: string[] = categories?.values.map((category: any) => category.name) ?? [];
  const lastThreeCategories = categoryNames.slice(-4);
    const productListResponse = new ProductListResponse();
    
    productListResponse.author = {
      name: 'Estif Fabian',
      lastname: 'Arenas Pamplona',
    };

    productListResponse.categories = lastThreeCategories ?? []
  
    productListResponse.items = data.results.map(result => ({
      id: result.id,
      title: result.title,
      price: {
        currency: result.currency_id,
        amount: result.price,
        decimals: 0,
      },
      picture: result.thumbnail,
      condition: result.condition,
      free_shipping: result.shipping.free_shipping,
    }));
  
    return productListResponse;
  }
}