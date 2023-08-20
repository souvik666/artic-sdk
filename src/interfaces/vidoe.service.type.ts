export interface IVideo {
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
  credit_line: string;
  content_e_tag: string;
  artwork_ids: any[];
  artwork_titles: any[];
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
}
