"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericPageService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
class GenericPageService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['generic-pages'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
     */
    static get getInstance() {
        if (GenericPageService.instance)
            return GenericPageService.instance;
        else {
            GenericPageService.instance = new GenericPageService();
            return GenericPageService.instance;
        }
    }
}
exports.GenericPageService = GenericPageService;
GenericPageService.instance = null;
//# sourceMappingURL=genericPage.service.js.map