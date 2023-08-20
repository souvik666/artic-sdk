export interface IImage {
  id: string;
  lake_guid: string;
  api_model: string;
  api_link: string;
  title: string;
  type: string;
  alt_text: any;
  content: any;
  is_multimedia_resource: boolean;
  is_educational_resource: boolean;
  is_teacher_resource: boolean;
  credit_line: any;
  content_e_tag: string;
  iiif_url: string;
  width: number;
  height: number;
  lqip: string;
  colorfulness: number;
  color: Color;
  fingerprint: any;
  ahash: any;
  phash: any;
  artwork_ids: any[];
  artwork_titles: any[];
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
}

export interface Color {
  h: number;
  l: number;
  s: number;
  percentage: number;
  population: number;
}
