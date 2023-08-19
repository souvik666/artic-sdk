import { IBaseParams } from "../interfaces/base.response.type";
import { IProductResponse } from "../interfaces/product.service.type";
import { BaseService } from "./base.service";
export declare class ProductService extends BaseService<IProductResponse, IBaseParams> {
    static instance: ProductService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The getInstance method returns an instance of the ProductService class.
     */
    static get getInstance(): ProductService;
}
