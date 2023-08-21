import { IBaseParams } from '../interfaces/base.response.type';
import { IEventOccurrence } from '../interfaces/eventOccurence.service.type';
import { BaseService } from './base.service';
export declare class EventsOccurrenceService extends BaseService<IEventOccurrence, IBaseParams> {
    static instance: EventsOccurrenceService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
     */
    static get getInstance(): EventsOccurrenceService;
}
