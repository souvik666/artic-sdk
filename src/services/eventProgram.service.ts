import { paths } from '../constants';
import { IBaseParams } from '../interfaces/base.response.type';
import { IEventProgram } from '../interfaces/eventProgram.service.type';

import { BaseService } from './base.service';

export class EventProgramService extends BaseService<
  IEventProgram,
  IBaseParams
> {
  public static instance: EventProgramService | null = null;
  constructor() {
    super({ path: paths['event-programs'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
   */
  public static get getInstance() {
    if (EventProgramService.instance) return EventProgramService.instance;
    else {
      EventProgramService.instance = new EventProgramService();
      return EventProgramService.instance;
    }
  }
}
