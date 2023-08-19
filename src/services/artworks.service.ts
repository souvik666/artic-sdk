import { paths } from "../constants";
import { BaseService } from "./base.service";
import { IArtworkResponse } from "../interfaces/artwork.service.type";
import { IBaseParams } from "../interfaces/base.response.type";

/**
 ** WILL HANDLE ALL ARTWORK ROUTES
 * @description https://api.artic.edu/docs/#collections
 */
export class Artwork extends BaseService<
  IArtworkResponse,
  Partial<IBaseParams>
> {
  public static instance: Artwork | null = null;

  constructor() {
    super({ path: paths.artworks });
  }
  /**
   ** ARTWORK INSTANCE
   */
  public static get getInstance() {
    if (Artwork.instance) return Artwork.instance;
    else {
      Artwork.instance = new Artwork();
      return Artwork.instance;
    }
  }
}
