import { paths } from '../constants';

import { IBaseParams } from '../interfaces/base.response.type';
import { IText } from '../interfaces/text.service.type';

import { BaseService } from './base.service';
/**
 * @description
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu (opens new window)
 */
export class TextService extends BaseService<IText, Partial<IBaseParams>> {
  public static instance: TextService | null = null;
  constructor() {
    super({ path: paths['texts'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `TextService` class.
   */
  public static get getInstance() {
    if (TextService.instance) return TextService.instance;
    else {
      TextService.instance = new TextService();
      return TextService.instance;
    }
  }
}
