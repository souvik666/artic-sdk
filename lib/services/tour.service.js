"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
/**
 * @description
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu (opens new window)
 */
class TourService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['tours'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `TourService` class.
     */
    static get getInstance() {
        if (TourService.instance)
            return TourService.instance;
        else {
            TourService.instance = new TourService();
            return TourService.instance;
        }
    }
}
exports.TourService = TourService;
TourService.instance = null;
//# sourceMappingURL=tour.service.js.map