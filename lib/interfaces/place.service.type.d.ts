import { IBaseResponse } from './base.response.type';
export type IPlaceResponse = IBaseResponse<IPlace>;
export interface IPlace {
    id: number;
    api_model: string;
    api_link: string;
    title: string;
    tgn_id: any;
    source_updated_at: string;
    updated_at: string;
    timestamp: string;
}
