import { paths } from "../constants";
import { IBaseParams } from "../interfaces/base.response.type";
import { IExhibitionResponse } from "../interfaces/exhibition.service.type";
import { BaseService } from "./base.service";
 
export class ExhibitionsService extends BaseService<
  IExhibitionResponse,
  IBaseParams
> {
  public static instance: ExhibitionsService | null = null;
  constructor() {
    super({ path: paths.exhibitions });
  }
  /**
   ** ExhibitionsService INSTANCE
   */
  public static get getInstance() {
    if (ExhibitionsService.instance) return ExhibitionsService.instance;
    else {
      ExhibitionsService.instance = new ExhibitionsService();
      return ExhibitionsService.instance;
    }
  }
}
