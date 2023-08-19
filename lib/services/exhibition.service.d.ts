import { IBaseParams } from "../interfaces/base.response.type";
import { IExhibitionResponse } from "../interfaces/exhibition.service.type";
import { BaseService } from "./base.service";
export declare class ExhibitionsService extends BaseService<IExhibitionResponse, IBaseParams> {
    static instance: ExhibitionsService | null;
    constructor();
    /**
     ** ExhibitionsService INSTANCE
     */
    static get getInstance(): ExhibitionsService;
}
