import { IBaseResponse } from './base.response.type';
export type IProductResponse = IBaseResponse<IProduct>;
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
