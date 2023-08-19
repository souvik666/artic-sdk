import { AxiosInstance } from "axios";
import { V1 } from "../constants";
import _axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import {
  IBaseParams,
  IBaseSearchParams,
  IBaseSearchResponse,
} from "../interfaces/base.response.type";

type CBaseService = {
  path: string;
};

export type IGet<T> = {
  config?: AxiosRequestConfig;
  params?: T;
};

export class BaseService<T, PT> {
  private readonly url: URL = V1;
  private axios: AxiosInstance;
  private path: string = "";

  constructor({ path }: CBaseService) {
    this.axios = _axios.create({ baseURL: this.url.href });
    this.path = path;
  }
  /**
   *
   * @param args {IGet<PT>} request arguments
   * @returns {Promise<AxiosResponse<T[], any>>} get response
   */
  public get(args?: IGet<PT>): Promise<AxiosResponse<T, any>> {
    return this.axios?.get<T>(this.path, {
      ...args?.config,
      params: { ...args?.params },
    });
  }
  /**
   *
   * @param args
   * @param reference - THE TARGET ID
   * @returns
   */
  public getOne(
    args: IGet<object> & {
      reference?: string | number;
    }
  ): Promise<AxiosResponse<T, any>> {
    return this.axios?.get<T>(this.path + "/" + args?.reference, {
      ...args?.config,
      params: { ...args?.params },
    });
  }
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
  public search<T>({
    config,
    params,
  }: IGet<Partial<IBaseSearchParams & IBaseParams>>) {
    return this.axios.get<T & IBaseSearchResponse>(this.path + "/search", {
      ...config,
      params: params,
    });
  }

  // public post(
  //   body: Partial<T>,
  //   config?: AxiosRequestConfig
  // ): Promise<AxiosResponse<T, any>> {
  //   return this.axios?.post<T>(this.path, body, config);
  // }
  // public patch(body: Partial<T>, config?: AxiosRequestConfig) {
  //   return this.axios?.patch<T>(this.path, body, config);
  // }
  // public put(body: Partial<T>, config?: AxiosRequestConfig) {
  //   return this.axios?.put<T>(this.path, body, config);
  // }
  // public delete(reference: string | number) {
  //   return this.axios?.delete<T>(this.path + "/" + reference);
  // }
}
