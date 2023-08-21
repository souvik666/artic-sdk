import { paths } from '../constants';
import { IBaseParams } from '../interfaces/base.response.type';
 
import { IPrintedCatalog } from '../interfaces/printedCatalog.service.type';

import { BaseService } from './base.service';

export class PrintedCatalogService extends BaseService<
  IPrintedCatalog,
  IBaseParams
> {
  public static instance: PrintedCatalogService | null = null;
  constructor() {
    super({ path: paths['printed-catalogs'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
   */
  public static get getInstance() {
    if (PrintedCatalogService.instance) return PrintedCatalogService.instance;
    else {
      PrintedCatalogService.instance = new PrintedCatalogService();
      return PrintedCatalogService.instance;
    }
  }
}
