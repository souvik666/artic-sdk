export interface IEventOccurrence {
    id: string;
    api_model: string;
    api_link: string;
    title: string;
    event_id: number;
    short_description: string;
    description: string;
    image_url: string;
    is_private: boolean;
    start_at: string;
    end_at: string;
    location: string;
    button_url?: string;
    button_text: string;
    button_caption: string;
    source_updated_at: string;
    updated_at: string;
    timestamp: string;
}
