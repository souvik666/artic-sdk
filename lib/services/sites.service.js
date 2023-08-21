"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitesService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
/**
 * @description
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu (opens new window)
 */
class SitesService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['sites'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `SitesService` class.
     */
    static get getInstance() {
        if (SitesService.instance)
            return SitesService.instance;
        else {
            SitesService.instance = new SitesService();
            return SitesService.instance;
        }
    }
}
exports.SitesService = SitesService;
SitesService.instance = null;
//# sourceMappingURL=sites.service.js.map