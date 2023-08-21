import { IBaseParams } from '../interfaces/base.response.type';
import { IDigitalPublications } from '../interfaces/digitalPublicationSection.service.type';
import { BaseService } from './base.service';
export declare class DigitalPublicationsService extends BaseService<IDigitalPublications, IBaseParams> {
    static instance: DigitalPublicationsService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `DigitalPublicationsService` class.
     */
    static get getInstance(): DigitalPublicationsService;
}
