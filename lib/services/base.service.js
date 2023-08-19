"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const constants_1 = require("../constants");
const axios_1 = __importDefault(require("axios"));
/* The above class is a TypeScript implementation of a base service that provides methods for making
HTTP GET requests using Axios. */
class BaseService {
    /**
     * The constructor function initializes the axios instance and sets the base URL and path for the
     * service.
     * @param {CBaseService}  - The constructor function takes in an object with a property called `path`
     * of type `CBaseService`. The `path` property is then assigned to the `this.path` property of the
     * class instance.
     */
    constructor({ path }) {
        this.url = constants_1.V1;
        this.path = '';
        this.axios = axios_1.default.create({ baseURL: this.url.href });
        this.path = path;
    }
    /**
     * The function is a TypeScript method that sends a GET request using Axios and returns a Promise
     * that resolves to an AxiosResponse.
     * @param [args] - The `args` parameter is an optional object that contains the following properties: {config, params}
     * @returns a Promise that resolves to an AxiosResponse object.
     */
    get(args) {
        return this.axios?.get(this.path, {
            ...args?.config,
            params: { ...args?.params },
        });
    }
    /**
     * The function `getOne` makes a GET request to a specified path with optional parameters and returns
     * a Promise containing the Axios response.
     * @param args - The `args` parameter is an object that contains two properties:{config, params}
     * @returns a Promise that resolves to an AxiosResponse object.
     */
    getOne(args) {
        return this.axios?.get(this.path + '/' + args?.reference, {
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
        return this.axios.get(this.path + '/search', {
            ...config,
            params: params,
        });
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map