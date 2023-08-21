import { IBaseParams } from '../interfaces/base.response.type';
import { IEducatorResource } from '../interfaces/educatorResource.service.type';
import { BaseService } from './base.service';
export declare class EducatorResourceService extends BaseService<IEducatorResource, IBaseParams> {
    static instance: EducatorResourceService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EducatorResourceService` class.
     */
    static get getInstance(): EducatorResourceService;
}
