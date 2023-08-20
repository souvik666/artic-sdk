import { paths } from "../constants";
import { IBaseParams } from "../interfaces/base.response.type";
import { IExhibition } from "../interfaces/exhibition.service.type";
import { BaseService } from "./base.service";
 
export class ExhibitionsService extends BaseService<
  IExhibition,
  IBaseParams
> {
  public static instance: ExhibitionsService | null = null;
  constructor() {
    super({ path: paths.exhibitions });
  }
  
 /**
  * The above function is a singleton pattern implementation in TypeScript.
  * @returns The `getInstance` method returns an instance of the `ExhibitionsService` class.
  */
  public static get getInstance() {
    if (ExhibitionsService.instance) return ExhibitionsService.instance;
    else {
      ExhibitionsService.instance = new ExhibitionsService();
      return ExhibitionsService.instance;
    }
  }
}
