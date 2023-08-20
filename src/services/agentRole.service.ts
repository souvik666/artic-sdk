import { paths } from '../constants';
import { BaseService, IGet } from './base.service';
import { IArtworkResponse } from '../interfaces/artwork.service.type';
import {
  IBaseParams,
  IBaseSearchParams,
  IBaseSearchResponse,
} from '../interfaces/base.response.type';
import { AxiosResponse } from 'axios';
import { IAgentRole } from '../interfaces/agentRole.service.type';

/**
 ** WILL HANDLE ALL ARTWORK ROUTES
 * @description https://api.artic.edu/docs/#collections
 */
export class AgentRole extends BaseService<IAgentRole, Partial<IBaseParams>> {
  public static instance: AgentRole | null = null;

  constructor() {
    super({ path: paths['agent-roles'] });
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
   * The function returns an instance of the AgentRole class, creating it if it doesn't already exist.
   * @returns The `getInstance` method returns an instance of the `AgentRole` class.
   */
  public static get getInstance() {
    if (AgentRole.instance) return AgentRole.instance;
    else {
      AgentRole.instance = new AgentRole();
      return AgentRole.instance;
    }
  }
}

// AgentRole.getInstance.getOne().then(d =>)
