import { IBaseParams } from '../interfaces/base.response.type';
import { IDigitalCatalog } from '../interfaces/digitalCatalog.service.type';
import { BaseService } from './base.service';
export declare class DigitalCatalogService extends BaseService<IDigitalCatalog, IBaseParams> {
    static instance: DigitalCatalogService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `DigitalCatalogService` class.
     */
    static get getInstance(): DigitalCatalogService;
}
