import { paths } from '../constants';

import { IBaseParams } from '../interfaces/base.response.type';
import { IImage } from '../interfaces/image.service.type';
import { BaseService } from './base.service';
/**
 * @description
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu (opens new window)
 */
export class ImageService extends BaseService<IImage, Partial<IBaseParams>> {
  public static instance: ImageService | null = null;
  constructor() {
    super({ path: paths['images'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `ImageService` class.
   */
  public static get getInstance() {
    if (ImageService.instance) return ImageService.instance;
    else {
      ImageService.instance = new ImageService();
      return ImageService.instance;
    }
  }
}
