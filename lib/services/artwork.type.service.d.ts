import { BaseService, IGet } from './base.service';
import { IBAseQualifier, IBaseParams, IBaseSearchParams, IBaseSearchResponse } from '../interfaces/base.response.type';
import { AxiosResponse } from 'axios';
/**
 ** WILL HANDLE ALL ARTWORK ROUTES
 * @description https://api.artic.edu/docs/#collections
 */
export declare class ArtWorkTypeService extends BaseService<IBAseQualifier, Partial<IBaseParams>> {
    static instance: ArtWorkTypeService | null;
    constructor();
    /**
     *
     * @deprecated PLEASE DON'T USE THIS FEATURE AGENT ROLES
     * DOESN'T SUPPORT THIS CURRENTLY
     * @see https://api.artic.edu/docs/#collections
     * @returns
     */
    search<T>({ config, params, }: IGet<Partial<IBaseSearchParams & IBaseParams>>): Promise<AxiosResponse<T & IBaseSearchResponse, any>>;
    /**
     * The function returns an instance of the ArtWorkTypeService class, creating it if it doesn't already exist.
     * @returns The `getInstance` method returns an instance of the `ArtWorkTypeService` class.
     */
    static get getInstance(): ArtWorkTypeService;
}
