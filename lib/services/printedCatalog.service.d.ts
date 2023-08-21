import { IBaseParams } from '../interfaces/base.response.type';
import { IPrintedCatalog } from '../interfaces/printedCatalog.service.type';
import { BaseService } from './base.service';
export declare class PrintedCatalogService extends BaseService<IPrintedCatalog, IBaseParams> {
    static instance: PrintedCatalogService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
     */
    static get getInstance(): PrintedCatalogService;
}
