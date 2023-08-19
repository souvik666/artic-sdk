import { IAgentResponse } from "../interfaces/agent.service.type";
import { IBaseParams } from "../interfaces/base.response.type";
import { BaseService } from "./base.service";
/**
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu
 */
export declare class AgentService extends BaseService<IAgentResponse, IBaseParams> {
    static instance: AgentService | null;
    constructor();
    /**
     ** AgentService INSTANCE
     */
    static get getInstance(): AgentService;
}
