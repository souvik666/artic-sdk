import { IBaseResponse } from './base.response.type';

export type IProductResponse = IBaseResponse<IProduct>;


/* The `IProduct` interface defines the structure of a product object. It specifies the properties and
their types that a product object should have. Each property represents a specific attribute of a
product, such as its ID, title, image URL, price, etc. The interface also includes arrays
(`artist_ids`, `artwork_ids`, `exhibition_ids`) to store related IDs. The interface is used to
ensure type safety and consistency when working with product objects in TypeScript. */
export interface IProduct {
  id: number;
  api_model: string;
  api_link: string;
  title: string;
  external_sku: number;
  image_url: string;
  web_url: string;
  description: string;
  price_display: string;
  min_compare_at_price: number;
  max_compare_at_price: number;
  min_current_price: number;
  max_current_price: number;
  artist_ids: number[];
  artwork_ids: any[];
  exhibition_ids: any[];
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
}
