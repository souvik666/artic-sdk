import { paths } from '../constants';

import { IBaseParams } from '../interfaces/base.response.type';
import { ISites } from '../interfaces/sites.service.type';
import { BaseService } from './base.service';
/**
 * @description
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu (opens new window)
 */
export class SitesService extends BaseService<ISites, Partial<IBaseParams>> {
  public static instance: SitesService | null = null;
  constructor() {
    super({ path: paths['sites'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `SitesService` class.
   */
  public static get getInstance() {
    if (SitesService.instance) return SitesService.instance;
    else {
      SitesService.instance = new SitesService();
      return SitesService.instance;
    }
  }
}
