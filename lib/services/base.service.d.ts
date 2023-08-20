import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { IBaseParams, IBaseResponse, IBaseSearchParams, IBaseSearchResponse } from '../interfaces/base.response.type';
/**
 * The above type defines a generic interface for making GET requests with optional configuration and
 * parameters.
 * @property {string} path - The `path` property is a string that represents the endpoint or URL path
 * for a service. It is typically used in API requests to specify the location of the resource being
 * accessed or modified.
 */
export type CBaseService = {
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
    /**
     * The constructor function initializes the axios instance and sets the base URL and path for the
     * service.
     * @param {CBaseService}  - The constructor function takes in an object with a property called `path`
     * of type `CBaseService`. The `path` property is then assigned to the `this.path` property of the
     * class instance.
     */
    constructor({ path }: CBaseService);
    /**
     * The function is a TypeScript method that sends a GET request using Axios and returns a Promise
     * that resolves to an AxiosResponse.
     * @param [args] - The `args` parameter is an optional object that contains the following properties: {config, params}
     * @returns a Promise that resolves to an AxiosResponse object.
     */
    get(args?: IGet<PT>): Promise<AxiosResponse<IBaseResponse<T[]>, any>>;
    /**
     * The function `getOne` makes a GET request to a specified path with optional parameters and returns
     * a Promise containing the Axios response.
     * @param args - The `args` parameter is an object that contains two properties:{config, params}
     * @returns a Promise that resolves to an AxiosResponse object.
     */
    getOne(args: IGet<object> & {
        reference?: string | number;
    }): Promise<AxiosResponse<IBaseResponse<T>, any>>;
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
