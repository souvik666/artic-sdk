import { paths } from '../constants';
import { IBaseParams } from '../interfaces/base.response.type';
import { IGenericPage } from '../interfaces/genericPage.service.type';
 
import { BaseService } from './base.service';

export class GenericPageService extends BaseService<IGenericPage, IBaseParams> {
  public static instance: GenericPageService | null = null;
  constructor() {
    super({ path: paths['generic-pages'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
   */
  public static get getInstance() {
    if (GenericPageService.instance) return GenericPageService.instance;
    else {
      GenericPageService.instance = new GenericPageService();
      return GenericPageService.instance;
    }
  }
}
