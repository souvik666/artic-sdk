import { paths } from "../constants";
import { IBaseParams } from "../interfaces/base.response.type";
import { IPlaceResponse } from "../interfaces/place.service.type";
import { BaseService } from "./base.service";
/**
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu
 */
export class GalleryService extends BaseService<IPlaceResponse, IBaseParams> {
  public static instance: GalleryService | null = null;
  constructor() {
    super({ path: paths.galleries });
  }
  /**
   ** GalleryService INSTANCE
   */
  public static get getInstance() {
    if (GalleryService.instance) return GalleryService.instance;
    else {
      GalleryService.instance = new GalleryService();
      return GalleryService.instance;
    }
  }
}
