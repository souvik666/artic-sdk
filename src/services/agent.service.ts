import { paths } from '../constants';
import { IAGent } from '../interfaces/agent.service.type';
import { IBaseParams } from '../interfaces/base.response.type';
import { BaseService } from './base.service';
/**
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu
 */
export class AgentService extends BaseService<IAGent, Partial<IBaseParams>> {
  public static instance: AgentService | null = null;
  constructor() {
    super({ path: paths.agents });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `AgentService` class.
   */
  public static get getInstance() {
    if (AgentService.instance) return AgentService.instance;
    else {
      AgentService.instance = new AgentService();
      return AgentService.instance;
    }
  }
}
