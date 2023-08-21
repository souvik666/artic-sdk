import { IBaseParams } from '../interfaces/base.response.type';
import { IEvent } from '../interfaces/event.service.type';
import { BaseService } from './base.service';
export declare class EventsService extends BaseService<IEvent, IBaseParams> {
    static instance: EventsService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EventsService` class.
     */
    static get getInstance(): EventsService;
}
