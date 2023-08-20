export interface ISound {
  id: string;
  lake_guid: string;
  api_model: string;
  api_link: string;
  title: string;
  type: string;
  alt_text: any;
  content: string;
  is_multimedia_resource: boolean;
  is_educational_resource: boolean;
  is_teacher_resource: boolean;
  credit_line: any;
  content_e_tag: string;
  artwork_ids: number[];
  artwork_titles: string[];
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
}
