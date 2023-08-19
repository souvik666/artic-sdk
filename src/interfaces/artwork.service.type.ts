import { AxiosResponse } from "axios";
import { IBaseResponse } from "./base.response.type";
/**
 * Query Parameters for Resource Retrieval:
 * - ids: A comma-separated list of resource ids to retrieve
 * - limit: The number of resources to return per page
 * - page: The page of resources to retrieve
 * - fields: A comma-separated list of fields to return per resource
 * - include: A comma-separated list of subresources to embed in the returned resources.
 *   Available options are:
 *   - artist_pivots
 *   - dates
 *   - place_pivots
 *   - sites
 */

export interface IArtwork {
  search(params: IArtworkSearch): Promise<AxiosResponse<IArtworkResponse, any>>;
}

export type IArtworkResponse = IBaseResponse<IArtWork>;

export type IArtworkSearchResponse = IBaseResponse<{
  _score: number;
  thumbnail: Thumbnail;
  api_model: string;
  is_boosted: boolean;
  api_link: string;
  id: number;
  title: string;
  timestamp: string;
}>;

export type IArtworkSearch = {
  q: string;
  query: string;
  sort: string;
  from: String;
  size: string;
  facets: string;
};
export interface IArtWork {
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
  suggest_autocomplete_all: SuggestAutocompleteAll[];
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
}

export interface Thumbnail {
  lqip: string;
  width?: number;
  height?: number;
  alt_text: string;
}

export interface DimensionsDetail {
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

export interface Color {
  h: number;
  l: number;
  s: number;
  percentage: number;
  population: number;
}

export interface SuggestAutocompleteAll {
  input: string[];
  contexts: Contexts;
  weight?: number;
}

export interface Contexts {
  groupings: string[];
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
