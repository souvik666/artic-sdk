"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighlightService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
class HighlightService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['highlights'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
     */
    static get getInstance() {
        if (HighlightService.instance)
            return HighlightService.instance;
        else {
            HighlightService.instance = new HighlightService();
            return HighlightService.instance;
        }
    }
}
exports.HighlightService = HighlightService;
HighlightService.instance = null;
//# sourceMappingURL=highlight.service.js.map