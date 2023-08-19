export interface IBaseResponse<T> {
    pagination: Pagination;
    data: T[];
    info: Info;
    config: Config;
}
export interface Pagination {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string;
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
export type IBaseParams = {
    ids: string;
    limit: number;
    page: number;
    fields: 'artist_pivots' | 'dates' | 'sites' | 'place_pivots';
};
export type IBaseSearchParams = {
    q: string;
    query: string;
    sort: string;
    from: String;
    size: string;
    facets: string;
};
export type IBaseSearchResponse = IBaseResponse<IGlobalSearchResponse>;
export interface IGlobalSearchResponse {
    _score: number;
    api_model: string;
    api_link: string;
    id: number;
    title: string;
    timestamp: string;
    thumbnail?: IThumbnail;
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
export interface IThumbnail {
    lqip: string;
    width?: number;
    height?: number;
    alt_text: string;
}
