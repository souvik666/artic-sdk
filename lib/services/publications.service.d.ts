import { IBaseParams } from '../interfaces/base.response.type';
import { IPublication } from '../interfaces/publication.service.type';
import { BaseService } from './base.service';
/**
 * @description
 * The data in this response may be protected by copyright, and other restrictions, of the Art Institute of Chicago and third parties. You may use this data for noncommercial educational and personal use and for "fair use" as authorized under law, provided that you also retain all copyright and other proprietary notices contained on the materials and cite the author and source of the materials
 */
export declare class PublicationService extends BaseService<IPublication, IBaseParams> {
    static instance: PublicationService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `PublicationService` class.
     */
    static get getInstance(): PublicationService;
}
