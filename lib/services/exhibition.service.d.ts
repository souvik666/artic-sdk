import { IBaseParams } from "../interfaces/base.response.type";
import { IExhibitionResponse } from "../interfaces/exhibition.service.type";
import { BaseService } from "./base.service";
export declare class ExhibitionsService extends BaseService<IExhibitionResponse, IBaseParams> {
    static instance: ExhibitionsService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `ExhibitionsService` class.
     */
    static get getInstance(): ExhibitionsService;
}
