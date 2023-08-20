export interface ICategoryTerm {
    id: string;
    api_model: string;
    api_link: string;
    title: string;
    subtype: string;
    parent_id: any;
    aat_id: any;
    suggest_autocomplete_all?: SuggestAutocompleteAll;
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
