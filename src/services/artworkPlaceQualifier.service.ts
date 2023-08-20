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
 * @description  
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu
 */
export class ArtworkPlaceQualifierService extends BaseService<
  IBAseQualifier,
  Partial<IBaseParams>
> {
  public static instance: ArtworkPlaceQualifierService | null = null;

  constructor() {
    super({ path: paths['artwork-place-qualifiers'] });
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
   * The function returns an instance of the ArtworkPlaceQualifierService class, creating it if it doesn't already exist.
   * @returns The `getInstance` method returns an instance of the `ArtworkPlaceQualifierService` class.
   */
  public static get getInstance() {
    if (ArtworkPlaceQualifierService.instance) return ArtworkPlaceQualifierService.instance;
    else {
      ArtworkPlaceQualifierService.instance = new ArtworkPlaceQualifierService();
      return ArtworkPlaceQualifierService.instance;
    }
  }
}
