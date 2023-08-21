export interface ISites {
    id: number;
    api_model: string;
    api_link: string;
    title: string;
    description?: string;
    web_url: string;
    exhibition_ids: any[];
    exhibition_titles: any[];
    artwork_ids: any[];
    artwork_titles: any[];
    source_updated_at: any;
    updated_at: string;
    timestamp: string;
}
