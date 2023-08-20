import { paths } from '../constants';
import { IBaseParams } from '../interfaces/base.response.type';
import { IMobileSound } from '../interfaces/mobileSound.service.type';
import { BaseService } from './base.service';
/**
 * @description
 * The data in this response may be protected by copyright, and other restrictions, of the Art Institute of Chicago and third parties. You may use this data for noncommercial educational and personal use and for "fair use" as authorized under law, provided that you also retain all copyright and other proprietary notices contained on the materials and cite the author and source of the materials
 */
export class MobileSoundService extends BaseService<IMobileSound, IBaseParams> {
  public static instance: MobileSoundService | null = null;
  constructor() {
    super({ path: paths['mobile-sounds'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `MobileSoundService` class.
   */
  public static get getInstance() {
    if (MobileSoundService.instance) return MobileSoundService.instance;
    else {
      MobileSoundService.instance = new MobileSoundService();
      return MobileSoundService.instance;
    }
  }
}
