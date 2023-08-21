import { paths } from '../constants';

import { IBaseParams } from '../interfaces/base.response.type';
import { IDigitalCatalog } from '../interfaces/digitalCatalog.service.type';
 
import { BaseService } from './base.service';

export class DigitalCatalogService extends BaseService<
  IDigitalCatalog,
  IBaseParams
> {
  public static instance: DigitalCatalogService | null = null;
  constructor() {
    super({ path: paths['digital-catalogs'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `DigitalCatalogService` class.
   */
  public static get getInstance() {
    if (DigitalCatalogService.instance) return DigitalCatalogService.instance;
    else {
      DigitalCatalogService.instance = new DigitalCatalogService();
      return DigitalCatalogService.instance;
    }
  }
}
