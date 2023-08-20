import { paths } from '../constants';
import { BaseService, IGet } from './base.service';
 
import {
  IBaseParams,
  IBaseSearchParams,
  IBaseSearchResponse,
} from '../interfaces/base.response.type';
 
import { AxiosResponse } from 'axios';
import { IAGent } from '../interfaces/agent.service.type';

/**
 ** WILL HANDLE ALL ARTWORK ROUTES
 * @description https://api.artic.edu/docs/#collections
 */
export class AgentTypeService extends BaseService<
  IAGent,
  Partial<IBaseParams>
> {
  public static instance: AgentTypeService | null = null;

  constructor() {
    super({ path: paths['agent-types'] });
  }
  /**
   *
   * @deprecated PLEASE DON'T USE THIS FEATURE AGENT ROLES
   * DOESN'T SUPPORT THIS CURRENTLY
   * @see https://api.artic.edu/docs/#collections
   * @returns
   */
  public override search<T>({
    config,
    params,
  }: IGet<Partial<IBaseSearchParams & IBaseParams>>): Promise<
    AxiosResponse<T & IBaseSearchResponse, any>
  > {
    return super.search({ config, params });
  }

  /**
   * The function returns an instance of the AgentTypeService class, creating it if it doesn't already exist.
   * @returns The `getInstance` method returns an instance of the `AgentTypeService` class.
   */
  public static get getInstance() {
    if (AgentTypeService.instance) return AgentTypeService.instance;
    else {
      AgentTypeService.instance = new AgentTypeService();
      return AgentTypeService.instance;
    }
  }
}

