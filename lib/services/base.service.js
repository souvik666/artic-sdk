"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const constants_1 = require("../constants");
const axios_1 = __importDefault(require("axios"));
class BaseService {
    constructor({ path }) {
        this.url = constants_1.V1;
        this.path = "";
        this.axios = axios_1.default.create({ baseURL: this.url.href });
        this.path = path;
    }
    /**
     *
     * @param args {IGet<PT>} request arguments
     * @returns {Promise<AxiosResponse<T[], any>>} get response
     */
    get(args) {
        return this.axios?.get(this.path, {
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
    getOne(args) {
        return this.axios?.get(this.path + "/" + args?.reference, {
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
    search({ config, params, }) {
        return this.axios.get(this.path + "/search", {
            ...config,
            params: params,
        });
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map