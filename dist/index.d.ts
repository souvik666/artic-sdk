import { AxiosRequestConfig } from 'axios';
import { AxiosResponse } from 'axios';

/**
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu
 */
declare class AgentService extends BaseService<IAgentResponse, IBaseParams> {
    static instance: AgentService | null;
    constructor();
    /**
     ** AgentService INSTANCE
     */
    static get getInstance(): AgentService;
}

/**
 ** WILL HANDLE ALL ARTWORK ROUTES
 * @description https://api.artic.edu/docs/#collections
 */
declare class Artwork extends BaseService<IArtworkResponse, Partial<IBaseParams>> {
    static instance: Artwork | null;
    constructor();
    /**
     ** ARTWORK INSTANCE
     */
    static get getInstance(): Artwork;
}

declare class BaseService<T, PT> {
    private readonly url;
    private axios;
    private path;
    constructor({ path }: CBaseService);
    /**
     *
     * @param args {IGet<PT>} request arguments
     * @returns {Promise<AxiosResponse<T[], any>>} get response
     */
    get(args?: IGet<PT>): Promise<AxiosResponse<T, any>>;
    /**
     *
     * @param args
     * @param reference - THE TARGET ID
     * @returns
     */
    getOne(args: IGet<object> & {
        reference?: string | number;
    }): Promise<AxiosResponse<T, any>>;
    /**
     * Searches based on the provided parameters.
     * Query Parameters for Artwork Search:
     * @param q: Your search query
     * @param query: For complex queries, you can pass Elasticsearch domain syntax queries here
     * @param sort: Used in conjunction with the query
     * @param from: Starting point of results. Pagination via Elasticsearch conventions
     * @param size: Number of results to return. Pagination via Elasticsearch conventions
     * @param facets: A comma-separated list of 'count' aggregation facets to include in the results.
     * @returns {Promise<AxiosResponse<IArtworkSearchResponse, any>} search results
     *
     */
    search<T>({ config, params, }: IGet<Partial<IBaseSearchParams & IBaseParams>>): Promise<AxiosResponse<T & IBaseSearchResponse, any>>;
}

declare type CBaseService = {
    path: string;
};

declare interface Color {
    h: number;
    l: number;
    s: number;
    percentage: number;
    population: number;
}

declare interface Config {
    iiif_url: string;
    website_url: string;
}

declare interface Config {
    iiif_url: string;
    website_url: string;
}

declare interface Contexts {
    groupings: string[];
}

declare interface Contexts_2 {
    groupings: string[];
}

declare interface Contexts_3 {
    groupings: string[];
}

declare interface Daum {
    _score: number;
    api_model: string;
    api_link: string;
    id: number;
    title: string;
    timestamp: string;
    thumbnail?: IThumbnail;
}

declare interface Daum_2 {
    id: number;
    api_model: string;
    api_link: string;
    title: string;
    sort_title: string;
    alt_titles?: string[];
    is_artist: boolean;
    birth_date: number;
    death_date: any;
    description: any;
    ulan_id: any;
    suggest_autocomplete_all: SuggestAutocompleteAll;
    source_updated_at: string;
    updated_at: string;
    timestamp: string;
    suggest_autocomplete_boosted?: SuggestAutocompleteBoosted;
}

/**
 * Artic api SDK
 * All The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu
 */
export declare class Default {
    static agent: AgentService;
    static artwork: Artwork;
    static exhibition: ExhibitionsService;
    static product: ProductService;
    static place: PlaceService;
    static gallery: GalleryService;
}

declare interface DimensionsDetail {
    depth_cm: number;
    depth_in: number;
    width_cm: number;
    width_in: number;
    height_cm: number;
    height_in: number;
    diameter_cm: number;
    diameter_in: number;
    clarification?: string;
}

declare class ExhibitionsService extends BaseService<IExhibitionResponse, IBaseParams> {
    static instance: ExhibitionsService | null;
    constructor();
    /**
     ** ExhibitionsService INSTANCE
     */
    static get getInstance(): ExhibitionsService;
}

/**
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu
 */
declare class GalleryService extends BaseService<IPlaceResponse, IBaseParams> {
    static instance: GalleryService | null;
    constructor();
    /**
     ** GalleryService INSTANCE
     */
    static get getInstance(): GalleryService;
}

declare type IAgentResponse = IBaseResponse<Daum_2>;

declare interface IArtWork {
    id: number;
    api_model: string;
    api_link: string;
    is_boosted: boolean;
    title: string;
    alt_titles: any;
    thumbnail: Thumbnail;
    main_reference_number: string;
    has_not_been_viewed_much: boolean;
    boost_rank: any;
    date_start: number;
    date_end: number;
    date_display: string;
    date_qualifier_title: string;
    date_qualifier_id?: number;
    artist_display: string;
    place_of_origin: string;
    dimensions: string;
    dimensions_detail: DimensionsDetail[];
    medium_display: string;
    inscriptions?: string;
    credit_line: string;
    catalogue_display?: string;
    publication_history?: string;
    exhibition_history?: string;
    provenance_text?: string;
    edition: any;
    publishing_verification_level: string;
    internal_department_id: number;
    fiscal_year?: number;
    fiscal_year_deaccession: any;
    is_public_domain: boolean;
    is_zoomable: boolean;
    max_zoom_window_size: number;
    copyright_notice?: string;
    has_multimedia_resources: boolean;
    has_educational_resources: boolean;
    has_advanced_imaging: boolean;
    colorfulness: number;
    color: Color;
    latitude?: number;
    longitude?: number;
    latlon?: string;
    is_on_view: boolean;
    on_loan_display?: string;
    gallery_title: any;
    gallery_id: any;
    artwork_type_title: string;
    artwork_type_id: number;
    department_title: string;
    department_id: string;
    artist_id: number;
    artist_title: string;
    alt_artist_ids: any[];
    artist_ids: number[];
    artist_titles: string[];
    category_ids: string[];
    category_titles: string[];
    term_titles: string[];
    style_id?: string;
    style_title?: string;
    alt_style_ids: string[];
    style_ids: string[];
    style_titles: string[];
    classification_id: string;
    classification_title: string;
    alt_classification_ids: string[];
    classification_ids: string[];
    classification_titles: string[];
    subject_id?: string;
    alt_subject_ids: string[];
    subject_ids: string[];
    subject_titles: string[];
    material_id?: string;
    alt_material_ids: string[];
    material_ids: string[];
    material_titles: string[];
    technique_id?: string;
    alt_technique_ids: string[];
    technique_ids: string[];
    technique_titles: string[];
    theme_titles: string[];
    image_id: string;
    alt_image_ids: string[];
    document_ids: string[];
    sound_ids: string[];
    video_ids: any[];
    text_ids: any[];
    section_ids: number[];
    section_titles: string[];
    site_ids: any[];
    suggest_autocomplete_boosted?: string;
    suggest_autocomplete_all: SuggestAutocompleteAll_2[];
    source_updated_at: string;
    updated_at: string;
    timestamp: string;
}

declare type IArtworkResponse = IBaseResponse<IArtWork>;

declare type IBaseParams = {
    ids: string;
    limit: number;
    page: number;
    fields: "artist_pivots" | "dates" | "sites" | "place_pivots";
};

declare interface IBaseResponse<T> {
    pagination: Pagination;
    data: T[];
    info: Info;
    config: Config;
}

declare type IBaseSearchParams = {
    q: string;
    query: string;
    sort: string;
    from: String;
    size: string;
    facets: string;
};

declare type IBaseSearchResponse = IBaseResponse<Daum>;

declare interface IExhibition {
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
    suggest_autocomplete_all: SuggestAutocompleteAll_3;
    source_updated_at: string;
    updated_at: string;
    timestamp: string;
}

declare type IExhibitionResponse = IBaseResponse<IExhibition>;

declare type IGet<T> = {
    config?: AxiosRequestConfig;
    params?: T;
};

declare interface Info {
    license_text: string;
    license_links: string[];
    version: string;
}

declare interface Info {
    license_text: string;
    license_links: string[];
    version: string;
}

declare interface IPlace {
    id: number;
    api_model: string;
    api_link: string;
    title: string;
    tgn_id: any;
    source_updated_at: string;
    updated_at: string;
    timestamp: string;
}

declare type IPlaceResponse = IBaseResponse<IPlace>;

declare interface IProduct {
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

declare type IProductResponse = IBaseResponse<IProduct>;

declare interface IThumbnail {
    lqip: string;
    width?: number;
    height?: number;
    alt_text: string;
}

declare interface Pagination {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string;
}

/**
 * The data in this response is licensed under a Creative Commons Attribution 4.0 Generic License (CC-By) and the
 * Terms and Conditions of artic.edu (opens new window). Contains information from the J. Paul Getty Trust, Getty Research Institute, the Getty Thesaurus of Geographic Names,
 * which is made available under the ODC Attribution License.
 */
declare class PlaceService extends BaseService<IPlaceResponse, IBaseParams> {
    static instance: PlaceService | null;
    constructor();
    /**
     ** PlaceService INSTANCE
     */
    static get getInstance(): PlaceService;
}

declare class ProductService extends BaseService<IProductResponse, IBaseParams> {
    static instance: ProductService | null;
    constructor();
    /**
     ** ProductService INSTANCE
     */
    static get getInstance(): ProductService;
}

declare interface SuggestAutocompleteAll {
    input: string[];
    weight: number;
    contexts: Contexts;
}

declare interface SuggestAutocompleteAll_2 {
    input: string[];
    contexts: Contexts_2;
    weight?: number;
}

declare interface SuggestAutocompleteAll_3 {
    input: string[];
    contexts: Contexts_3;
}

declare interface SuggestAutocompleteBoosted {
    input: string[];
    weight: number;
}

declare interface Thumbnail {
    lqip: string;
    width?: number;
    height?: number;
    alt_text: string;
}

export { }
