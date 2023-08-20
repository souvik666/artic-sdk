"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentRole = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
/**
 ** WILL HANDLE ALL ARTWORK ROUTES
 * @description https://api.artic.edu/docs/#collections
 */
class AgentRole extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['agent-roles'] });
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
     * The function returns an instance of the AgentRole class, creating it if it doesn't already exist.
     * @returns The `getInstance` method returns an instance of the `AgentRole` class.
     */
    static get getInstance() {
        if (AgentRole.instance)
            return AgentRole.instance;
        else {
            AgentRole.instance = new AgentRole();
            return AgentRole.instance;
        }
    }
}
exports.AgentRole = AgentRole;
AgentRole.instance = null;
// AgentRole.getInstance.getOne().then(d =>)
//# sourceMappingURL=agentRole.service.js.map