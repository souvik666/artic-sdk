import { IBaseParams } from '../interfaces/base.response.type';
import { IEventProgram } from '../interfaces/eventProgram.service.type';
import { BaseService } from './base.service';
export declare class EventProgramService extends BaseService<IEventProgram, IBaseParams> {
    static instance: EventProgramService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
     */
    static get getInstance(): EventProgramService;
}
