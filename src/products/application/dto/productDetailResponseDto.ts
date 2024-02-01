import { Author, Price } from "./commonDto";

export class ProductDetailResponse {
    author: Author;
    item: ProductDetail;
}
  
export class ProductDetail {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
}