"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalPublicationsService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
class DigitalPublicationsService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['digital-publication-sections'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `DigitalPublicationsService` class.
     */
    static get getInstance() {
        if (DigitalPublicationsService.instance)
            return DigitalPublicationsService.instance;
        else {
            DigitalPublicationsService.instance = new DigitalPublicationsService();
            return DigitalPublicationsService.instance;
        }
    }
}
exports.DigitalPublicationsService = DigitalPublicationsService;
DigitalPublicationsService.instance = null;
//# sourceMappingURL=digitalPublications.service.js.map