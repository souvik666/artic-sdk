"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
class ProductService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths.products });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The getInstance method returns an instance of the ProductService class.
     */
    static get getInstance() {
        if (ProductService.instance)
            return ProductService.instance;
        else {
            ProductService.instance = new ProductService();
            return ProductService.instance;
        }
    }
}
exports.ProductService = ProductService;
ProductService.instance = null;
//# sourceMappingURL=product.service.js.map