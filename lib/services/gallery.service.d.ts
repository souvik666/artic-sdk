import { IBaseParams } from "../interfaces/base.response.type";
import { IPlaceResponse } from "../interfaces/place.service.type";
import { BaseService } from "./base.service";
/**
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu
 */
export declare class GalleryService extends BaseService<IPlaceResponse, IBaseParams> {
    static instance: GalleryService | null;
    constructor();
    /**
     ** GalleryService INSTANCE
     */
    static get getInstance(): GalleryService;
}
