import { IBaseParams } from "../interfaces/base.response.type";
import { IPlace } from "../interfaces/place.service.type";
import { BaseService } from "./base.service";
/**
 * The data in this response is licensed under a Creative Commons Attribution 4.0 Generic License (CC-By) and the
 * Terms and Conditions of artic.edu (opens new window). Contains information from the J. Paul Getty Trust, Getty Research Institute, the Getty Thesaurus of Geographic Names,
 * which is made available under the ODC Attribution License.
 */
export declare class PlaceService extends BaseService<IPlace, IBaseParams> {
    static instance: PlaceService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The getInstance method returns an instance of the PlaceService class.
     */
    static get getInstance(): PlaceService;
}
