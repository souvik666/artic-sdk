import { IBaseParams } from '../interfaces/base.response.type';
import { IStaticPage } from '../interfaces/staticPage.service.type';
import { BaseService } from './base.service';
export declare class StaticPageService extends BaseService<IStaticPage, IBaseParams> {
    static instance: StaticPageService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
     */
    static get getInstance(): StaticPageService;
}
