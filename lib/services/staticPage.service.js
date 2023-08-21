"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticPageService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
class StaticPageService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['static-pages'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
     */
    static get getInstance() {
        if (StaticPageService.instance)
            return StaticPageService.instance;
        else {
            StaticPageService.instance = new StaticPageService();
            return StaticPageService.instance;
        }
    }
}
exports.StaticPageService = StaticPageService;
StaticPageService.instance = null;
//# sourceMappingURL=staticPage.service.js.map