import { IBaseResponse } from "./base.response.type";
export type IExhibitionResponse = IBaseResponse<IExhibition>;
export interface IExhibition {
    id: number;
    api_model: string;
    api_link: string;
    title: string;
    is_featured: boolean;
    short_description: string;
    web_url: string;
    image_url: string;
    status: string;
    aic_start_at: string;
    aic_end_at: string;
    gallery_id: number;
    gallery_title: string;
    artwork_ids: number[];
    artwork_titles: string[];
    artist_ids: number[];
    site_ids: any[];
    image_id: any;
    alt_image_ids: any[];
    document_ids: any[];
    suggest_autocomplete_boosted: string;
    suggest_autocomplete_all: SuggestAutocompleteAll;
    source_updated_at: string;
    updated_at: string;
    timestamp: string;
}
export interface SuggestAutocompleteAll {
    input: string[];
    contexts: Contexts;
}
export interface Contexts {
    groupings: string[];
}
