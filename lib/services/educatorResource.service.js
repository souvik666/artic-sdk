"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducatorResourceService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
class EducatorResourceService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['educator-resources'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `EducatorResourceService` class.
     */
    static get getInstance() {
        if (EducatorResourceService.instance)
            return EducatorResourceService.instance;
        else {
            EducatorResourceService.instance = new EducatorResourceService();
            return EducatorResourceService.instance;
        }
    }
}
exports.EducatorResourceService = EducatorResourceService;
EducatorResourceService.instance = null;
//# sourceMappingURL=educatorResource.service.js.map