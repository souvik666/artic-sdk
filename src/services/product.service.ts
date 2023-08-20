import { paths } from '../constants';
import { IBaseParams } from '../interfaces/base.response.type';
import { IProduct } from '../interfaces/product.service.type';
import { BaseService } from './base.service';
/**
 * @description
 * The data in this response may be protected by copyright, and other restrictions, of the Art Institute of Chicago and third parties. You may use this data for noncommercial educational and personal use and for "fair use" as authorized under law, provided that you also retain all copyright and other proprietary notices contained on the materials and cite the author and source of the materials
 */
export class ProductService extends BaseService<IProduct, IBaseParams> {
  public static instance: ProductService | null = null;
  constructor() {
    super({ path: paths.products });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The getInstance method returns an instance of the ProductService class.
   */
  public static get getInstance() {
    if (ProductService.instance) return ProductService.instance;
    else {
      ProductService.instance = new ProductService();
      return ProductService.instance;
    }
  }
}


