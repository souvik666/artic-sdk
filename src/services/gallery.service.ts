import { paths } from '../constants';
import { IBaseParams } from '../interfaces/base.response.type';
import { IGallery } from '../interfaces/gallery.service.type';
import { BaseService } from './base.service';
/**
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu
 */
export class GalleryService extends BaseService<IGallery, IBaseParams> {
  public static instance: GalleryService | null = null;
  constructor() {
    super({ path: paths.galleries });
  }

  /**
   * The above function is a static method in TypeScript that returns a single instance of the
   * GalleryService class using the Singleton design pattern.
   * @returns The `getInstance` method returns an instance of the `GalleryService` class.
   */
  public static get getInstance() {
    if (GalleryService.instance) return GalleryService.instance;
    else {
      GalleryService.instance = new GalleryService();
      return GalleryService.instance;
    }
  }
}
