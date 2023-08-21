"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
/**
 * @description
 * The data in this response may be protected by copyright, and other restrictions, of the Art Institute of Chicago and third parties. You may use this data for noncommercial educational and personal use and for "fair use" as authorized under law, provided that you also retain all copyright and other proprietary notices contained on the materials and cite the author and source of the materials
 */
class PublicationService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['publications'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `PublicationService` class.
     */
    static get getInstance() {
        if (PublicationService.instance)
            return PublicationService.instance;
        else {
            PublicationService.instance = new PublicationService();
            return PublicationService.instance;
        }
    }
}
exports.PublicationService = PublicationService;
PublicationService.instance = null;
//# sourceMappingURL=publications.service.js.map