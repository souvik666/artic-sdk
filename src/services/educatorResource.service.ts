import { paths } from '../constants';

import { IBaseParams } from '../interfaces/base.response.type';
import { IEducatorResource } from '../interfaces/educatorResource.service.type';

import { BaseService } from './base.service';

export class EducatorResourceService extends BaseService<
  IEducatorResource,
  IBaseParams
> {
  public static instance: EducatorResourceService | null = null;
  constructor() {
    super({ path: paths['educator-resources'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `EducatorResourceService` class.
   */
  public static get getInstance() {
    if (EducatorResourceService.instance)
      return EducatorResourceService.instance;
    else {
      EducatorResourceService.instance = new EducatorResourceService();
      return EducatorResourceService.instance;
    }
  }
}
