import { paths } from '../constants';
import { BaseService } from './base.service';
import { IArtWork } from '../interfaces/artwork.service.type';
import { IBaseParams } from '../interfaces/base.response.type';

/**
 ** WILL HANDLE ALL ARTWORK ROUTES
 * @description https://api.artic.edu/docs/#collections
 */
export class Artwork extends BaseService<IArtWork, Partial<IBaseParams>> {
  public static instance: Artwork | null = null;

  constructor() {
    super({ path: paths.artworks });
  }

  /**
   * The function returns an instance of the Artwork class, creating it if it doesn't already exist.
   * @returns The `getInstance` method returns an instance of the `Artwork` class.
   */
  public static get getInstance() {
    if (Artwork.instance) return Artwork.instance;
    else {
      Artwork.instance = new Artwork();
      return Artwork.instance;
    }
  }
}
