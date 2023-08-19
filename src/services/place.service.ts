import { paths } from "../constants";
import { IBaseParams } from "../interfaces/base.response.type";
import { IPlaceResponse } from "../interfaces/place.service.type";
import { BaseService } from "./base.service";
/**
 * The data in this response is licensed under a Creative Commons Attribution 4.0 Generic License (CC-By) and the 
 * Terms and Conditions of artic.edu (opens new window). Contains information from the J. Paul Getty Trust, Getty Research Institute, the Getty Thesaurus of Geographic Names, 
 * which is made available under the ODC Attribution License.
 */
export class PlaceService extends BaseService<IPlaceResponse, IBaseParams> {
  public static instance: PlaceService | null = null;
  constructor() {
    super({ path: paths.places });
  }
  /**
   ** PlaceService INSTANCE
   */
  public static get getInstance() {
    if (PlaceService.instance) return PlaceService.instance;
    else {
      PlaceService.instance = new PlaceService();
      return PlaceService.instance;
    }
  }
}
