import { IBaseParams } from "../interfaces/base.response.type";
import { IProductResponse } from "../interfaces/product.service.type";
import { BaseService } from "./base.service";
export declare class ProductService extends BaseService<IProductResponse, IBaseParams> {
    static instance: ProductService | null;
    constructor();
    /**
     ** ProductService INSTANCE
     */
    static get getInstance(): ProductService;
}
