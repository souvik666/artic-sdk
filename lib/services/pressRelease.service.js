"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PressReleaseService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
class PressReleaseService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['press-releases'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
     */
    static get getInstance() {
        if (PressReleaseService.instance)
            return PressReleaseService.instance;
        else {
            PressReleaseService.instance = new PressReleaseService();
            return PressReleaseService.instance;
        }
    }
}
exports.PressReleaseService = PressReleaseService;
PressReleaseService.instance = null;
//# sourceMappingURL=pressRelease.service.js.map