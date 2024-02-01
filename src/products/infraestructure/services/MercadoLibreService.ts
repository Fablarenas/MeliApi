import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { IMercadoLibreService } from './IMercadoLibreService';
import { ProductListDto } from './dtos/productListDto';
import { ProductDescriptionDto } from './dtos/productDescriptionDto';
import { ProductDetailDto } from './dtos/productDetailsDto';

@Injectable()
export class MercadoLibreService implements IMercadoLibreService {
  constructor(private httpService: HttpService) {}

  async getProductsByQuery(query: string): Promise<ProductListDto> {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
    const response = await firstValueFrom(this.httpService.get<ProductListDto>(url));
    return response.data;
  }

  async getProductDetails(id: string): Promise<ProductDetailDto> {
    const url = `https://api.mercadolibre.com/items/${id}`;
    const response = await firstValueFrom(this.httpService.get<ProductDetailDto>(url));
    return response.data;
  }
  
  async getProductDescription(id: string): Promise<ProductDescriptionDto> {
    const url = `https://api.mercadolibre.com/items/${id}/description`;
    const response = await firstValueFrom(this.httpService.get<ProductDescriptionDto>(url));
    return response.data;
  }

}
