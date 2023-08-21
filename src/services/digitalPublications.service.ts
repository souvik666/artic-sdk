import { paths } from '../constants';

import { IBaseParams } from '../interfaces/base.response.type';
 
import { IDigitalPublications } from '../interfaces/digitalPublicationSection.service.type';

import { BaseService } from './base.service';

export class DigitalPublicationsService extends BaseService<
  IDigitalPublications,
  IBaseParams
> {
  public static instance: DigitalPublicationsService | null = null;
  constructor() {
    super({ path: paths['digital-publication-sections'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `DigitalPublicationsService` class.
   */
  public static get getInstance() {
    if (DigitalPublicationsService.instance)
      return DigitalPublicationsService.instance;
    else {
      DigitalPublicationsService.instance = new DigitalPublicationsService();
      return DigitalPublicationsService.instance;
    }
  }
}
