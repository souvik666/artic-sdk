import { paths } from '../constants';
import { IBaseParams } from '../interfaces/base.response.type';

import { ISection } from '../interfaces/section.service.type';
import { BaseService } from './base.service';
/**
 * @description
 * The data in this response may be protected by copyright, and other restrictions, of the Art Institute of Chicago and third parties. You may use this data for noncommercial educational and personal use and for "fair use" as authorized under law, provided that you also retain all copyright and other proprietary notices contained on the materials and cite the author and source of the materials
 */
export class SectionService extends BaseService<ISection, IBaseParams> {
  public static instance: SectionService | null = null;
  constructor() {
    super({ path: paths['sections'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `SectionService` class.
   */
  public static get getInstance() {
    if (SectionService.instance) return SectionService.instance;
    else {
      SectionService.instance = new SectionService();
      return SectionService.instance;
    }
  }
}
