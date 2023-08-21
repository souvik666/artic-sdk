import { BaseService } from './base.service';
import { IArtWork } from '../interfaces/artwork.service.type';
import { IBaseParams } from '../interfaces/base.response.type';
/**
 ** WILL HANDLE ALL ARTWORK ROUTES
 * @description https://api.artic.edu/docs/#collections
 */
export declare class Artwork extends BaseService<IArtWork, Partial<IBaseParams>> {
    static instance: Artwork | null;
    constructor();
    /**
     * The function returns an instance of the Artwork class, creating it if it doesn't already exist.
     * @returns The `getInstance` method returns an instance of the `Artwork` class.
     */
    static get getInstance(): Artwork;
}
