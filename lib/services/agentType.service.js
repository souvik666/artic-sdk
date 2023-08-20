"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentTypeService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
/**
 ** WILL HANDLE ALL ARTWORK ROUTES
 * @description https://api.artic.edu/docs/#collections
 */
class AgentTypeService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['agent-types'] });
    }
    /**
     *
     * @deprecated PLEASE DON'T USE THIS FEATURE AGENT ROLES
     * DOESN'T SUPPORT THIS CURRENTLY
     * @see https://api.artic.edu/docs/#collections
     * @returns
     */
    search({ config, params, }) {
        return super.search({ config, params });
    }
    /**
     * The function returns an instance of the AgentTypeService class, creating it if it doesn't already exist.
     * @returns The `getInstance` method returns an instance of the `AgentTypeService` class.
     */
    static get getInstance() {
        if (AgentTypeService.instance)
            return AgentTypeService.instance;
        else {
            AgentTypeService.instance = new AgentTypeService();
            return AgentTypeService.instance;
        }
    }
}
exports.AgentTypeService = AgentTypeService;
AgentTypeService.instance = null;
//# sourceMappingURL=agentType.service.js.map