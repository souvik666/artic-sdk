import { paths } from '../constants';
import { IBaseParams } from '../interfaces/base.response.type';
import { IPressRelease } from '../interfaces/pressRelease.service.type';

 
import { BaseService } from './base.service';

export class PressReleaseService extends BaseService<IPressRelease, IBaseParams> {
  public static instance: PressReleaseService | null = null;
  constructor() {
    super({ path: paths['press-releases'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
   */
  public static get getInstance() {
    if (PressReleaseService.instance) return PressReleaseService.instance;
    else {
      PressReleaseService.instance = new PressReleaseService();
      return PressReleaseService.instance;
    }
  }
}
