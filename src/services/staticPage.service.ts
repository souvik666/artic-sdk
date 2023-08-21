import { paths } from '../constants';
import { IBaseParams } from '../interfaces/base.response.type';

import { IStaticPage } from '../interfaces/staticPage.service.type';

import { BaseService } from './base.service';

export class StaticPageService extends BaseService<IStaticPage, IBaseParams> {
  public static instance: StaticPageService | null = null;
  constructor() {
    super({ path: paths['static-pages'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
   */
  public static get getInstance() {
    if (StaticPageService.instance) return StaticPageService.instance;
    else {
      StaticPageService.instance = new StaticPageService();
      return StaticPageService.instance;
    }
  }
}
