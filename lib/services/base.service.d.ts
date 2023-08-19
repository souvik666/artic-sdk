import { AxiosResponse, AxiosRequestConfig } from "axios";
import { IBaseParams, IBaseSearchParams, IBaseSearchResponse } from "../interfaces/base.response.type";
type CBaseService = {
    path: string;
};
export type IGet<T> = {
    config?: AxiosRequestConfig;
    params?: T;
};
export declare class BaseService<T, PT> {
    private readonly url;
    private axios;
    private path;
    constructor({ path }: CBaseService);
    /**
     *
     * @param args {IGet<PT>} request arguments
     * @returns {Promise<AxiosResponse<T[], any>>} get response
     */
    get(args?: IGet<PT>): Promise<AxiosResponse<T, any>>;
    /**
     *
     * @param args
     * @param reference - THE TARGET ID
     * @returns
     */
    getOne(args: IGet<object> & {
        reference?: string | number;
    }): Promise<AxiosResponse<T, any>>;
    /**
     * Searches based on the provided parameters.
     * Query Parameters for Artwork Search:
     * @param q: Your search query
     * @param query: For complex queries, you can pass Elasticsearch domain syntax queries here
     * @param sort: Used in conjunction with the query
     * @param from: Starting point of results. Pagination via Elasticsearch conventions
     * @param size: Number of results to return. Pagination via Elasticsearch conventions
     * @param facets: A comma-separated list of 'count' aggregation facets to include in the results.
     * @returns {Promise<AxiosResponse<IArtworkSearchResponse, any>} search results
     *
     */
    search<T>({ config, params, }: IGet<Partial<IBaseSearchParams & IBaseParams>>): Promise<AxiosResponse<T & IBaseSearchResponse, any>>;
}
export {};
