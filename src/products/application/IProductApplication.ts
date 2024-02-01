import { ProductDetailResponse } from "./dto/productDetailResponseDto";
import { ProductListResponse } from "./dto/productListResponseDto";

export interface IProductApplication {
    getProductsByQuery(query: string): Promise<ProductListResponse>;
    getProductDetailsById(id: string): Promise<ProductDetailResponse>;
}