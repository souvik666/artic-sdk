"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintedCatalogService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
class PrintedCatalogService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['printed-catalogs'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
     */
    static get getInstance() {
        if (PrintedCatalogService.instance)
            return PrintedCatalogService.instance;
        else {
            PrintedCatalogService.instance = new PrintedCatalogService();
            return PrintedCatalogService.instance;
        }
    }
}
exports.PrintedCatalogService = PrintedCatalogService;
PrintedCatalogService.instance = null;
//# sourceMappingURL=printedCatalog.service.js.map