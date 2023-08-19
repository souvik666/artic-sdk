import { IBaseResponse } from "./base.response.type";

export type IAgentResponse = IBaseResponse<Daum>;
export interface Daum {
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

export interface SuggestAutocompleteAll {
  input: string[];
  weight: number;
  contexts: Contexts;
}

export interface Contexts {
  groupings: string[];
}

export interface SuggestAutocompleteBoosted {
  input: string[];
  weight: number;
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
