import { paths } from '../constants';

import { IBaseParams } from '../interfaces/base.response.type';
import { ICategoryTerm } from '../interfaces/categoryTerm.service.type';
import { BaseService } from './base.service';
/**
 * @description
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu (opens new window)
 */
export class CategoryTermService extends BaseService<
  ICategoryTerm,
  Partial<IBaseParams>
> {
  public static instance: CategoryTermService | null = null;
  constructor() {
    super({ path: paths['category-terms'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `CategoryTermService` class.
   */
  public static get getInstance() {
    if (CategoryTermService.instance) return CategoryTermService.instance;
    else {
      CategoryTermService.instance = new CategoryTermService();
      return CategoryTermService.instance;
    }
  }
}
