"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
/**
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu
 */
class AgentService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths.agents });
    }
    /**
     ** AgentService INSTANCE
     */
    static get getInstance() {
        if (AgentService.instance)
            return AgentService.instance;
        else {
            AgentService.instance = new AgentService();
            return AgentService.instance;
        }
    }
}
exports.AgentService = AgentService;
AgentService.instance = null;
//# sourceMappingURL=agent.service.js.map