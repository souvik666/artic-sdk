import { BaseService } from "./base.service";
import { IArtworkResponse } from "../interfaces/artwork.service.type";
import { IBaseParams } from "../interfaces/base.response.type";
/**
 ** WILL HANDLE ALL ARTWORK ROUTES
 * @description https://api.artic.edu/docs/#collections
 */
export declare class Artwork extends BaseService<IArtworkResponse, Partial<IBaseParams>> {
    static instance: Artwork | null;
    constructor();
    /**
     ** ARTWORK INSTANCE
     */
    static get getInstance(): Artwork;
}
