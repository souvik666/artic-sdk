import { IBaseParams } from '../interfaces/base.response.type';
import { IHighlights } from '../interfaces/highlight.service.type';
import { BaseService } from './base.service';
export declare class HighlightService extends BaseService<IHighlights, IBaseParams> {
    static instance: HighlightService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
     */
    static get getInstance(): HighlightService;
}
