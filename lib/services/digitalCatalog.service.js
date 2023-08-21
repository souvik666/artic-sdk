"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalCatalogService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
class DigitalCatalogService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['digital-catalogs'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `DigitalCatalogService` class.
     */
    static get getInstance() {
        if (DigitalCatalogService.instance)
            return DigitalCatalogService.instance;
        else {
            DigitalCatalogService.instance = new DigitalCatalogService();
            return DigitalCatalogService.instance;
        }
    }
}
exports.DigitalCatalogService = DigitalCatalogService;
DigitalCatalogService.instance = null;
//# sourceMappingURL=digitalCatalog.service.js.map