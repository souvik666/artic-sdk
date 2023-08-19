import { paths } from "../constants";
import { IBaseParams } from "../interfaces/base.response.type";
import { IProductResponse } from "../interfaces/product.service.type";
import { BaseService } from "./base.service";

export class ProductService extends BaseService<IProductResponse, IBaseParams> {
  public static instance: ProductService | null = null;
  constructor() {
    super({ path: paths.products });
  }
  /**
   ** ProductService INSTANCE
   */
  public static get getInstance() {
    if (ProductService.instance) return ProductService.instance;
    else {
      ProductService.instance = new ProductService();
      return ProductService.instance;
    }
  }
}
