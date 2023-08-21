import { IBaseParams } from '../interfaces/base.response.type';
import { IGenericPage } from '../interfaces/genericPage.service.type';
import { BaseService } from './base.service';
export declare class GenericPageService extends BaseService<IGenericPage, IBaseParams> {
    static instance: GenericPageService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
     */
    static get getInstance(): GenericPageService;
}
