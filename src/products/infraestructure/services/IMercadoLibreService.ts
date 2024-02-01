import { ProductDescriptionDto } from "./dtos/productDescriptionDto";
import { ProductDetailDto } from "./dtos/productDetailsDto";
import { ProductListDto } from "./dtos/productListDto";

export interface IMercadoLibreService {
    getProductsByQuery(query: string): Promise<ProductListDto>;
    getProductDetails(id: string): Promise<ProductDetailDto>;
    getProductDescription(id: string): Promise<ProductDescriptionDto>;
}