import { IBaseResponse } from './base.response.type';

export type IAgentRoleService = IBaseResponse<IAgentRole>;

export interface IAgentRole {
  id: number;
  api_model: string;
  api_link: string;
  title: string;
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
}
