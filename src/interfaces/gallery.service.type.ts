import { IBaseResponse } from "./base.response.type";

export type IGalleryResponse = IBaseResponse<IGallery>;

export interface IGallery {
  id: number;
  api_model: string;
  api_link: string;
  title: string;
  latitude: number;
  longitude: number;
  tgn_id: any;
  is_closed: boolean;
  number: string;
  floor: string;
  latlon: string;
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
