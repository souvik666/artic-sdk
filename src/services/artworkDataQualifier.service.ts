import { paths } from '../constants';
import { BaseService, IGet } from './base.service';
import {
  IBAseQualifier,
  IBaseParams,
  IBaseSearchParams,
  IBaseSearchResponse,
} from '../interfaces/base.response.type';

import { AxiosResponse } from 'axios';

/**
 ** WILL HANDLE ALL ARTWORK ROUTES
 * @description https://api.artic.edu/docs/#collections
 */
export class ArtWorkDataQualifierService extends BaseService<
  IBAseQualifier,
  Partial<IBaseParams>
> {
  public static instance: ArtWorkDataQualifierService | null = null;

  constructor() {
    super({ path: paths['artwork-date-qualifiers'] });
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
   * The function returns an instance of the ArtWorkDataQualifier class, creating it if it doesn't already exist.
   * @returns The `getInstance` method returns an instance of the `ArtWorkDataQualifier` class.
   */
  public static get getInstance() {
    if (ArtWorkDataQualifierService.instance)
      return ArtWorkDataQualifierService.instance;
    else {
      ArtWorkDataQualifierService.instance = new ArtWorkDataQualifierService();
      return ArtWorkDataQualifierService.instance;
    }
  }
}
