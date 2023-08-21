import { IBaseParams } from '../interfaces/base.response.type';
import { IPressRelease } from '../interfaces/pressRelease.service.type';
import { BaseService } from './base.service';
export declare class PressReleaseService extends BaseService<IPressRelease, IBaseParams> {
    static instance: PressReleaseService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
     */
    static get getInstance(): PressReleaseService;
}
