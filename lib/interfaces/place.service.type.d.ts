import { IBaseResponse } from "./base.response.type";
export interface IPlace {
    id: number;
    api_model: string;
    api_link: string;
    title: string;
    tgn_id: any;
    source_updated_at: string;
    updated_at: string;
    timestamp: string;
}
export interface Info {
    license_text: string;
    license_links: string[];
    version: string;
}
export interface Config {
    iiif_url: string;
    website_url: string;
}
export type IPlaceResponse = IBaseResponse<IPlace>;
