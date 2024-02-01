import { Author, Price } from "./commonDto";

export class ProductListResponse {
    author: Author;
    categories: string[];
    items: ProductSummary[];
  }
  
  export class ProductSummary {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
  }