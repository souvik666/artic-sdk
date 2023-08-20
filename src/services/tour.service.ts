import { paths } from '../constants';

import { IBaseParams } from '../interfaces/base.response.type';
import { ITour } from '../interfaces/tour.service.type';
import { BaseService } from './base.service';
/**
 * @description
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu (opens new window)
 */
export class TourService extends BaseService<ITour, Partial<IBaseParams>> {
  public static instance: TourService | null = null;
  constructor() {
    super({ path: paths['tours'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `TourService` class.
   */
  public static get getInstance() {
    if (TourService.instance) return TourService.instance;
    else {
      TourService.instance = new TourService();
      return TourService.instance;
    }
  }
}
