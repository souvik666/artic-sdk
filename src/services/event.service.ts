import { paths } from '../constants';
import { IBaseParams } from '../interfaces/base.response.type';
import { IEvent } from '../interfaces/event.service.type';

import { BaseService } from './base.service';

export class EventsService extends BaseService<IEvent, IBaseParams> {
  public static instance: EventsService | null = null;
  constructor() {
    super({ path: paths.events });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `EventsService` class.
   */
  public static get getInstance() {
    if (EventsService.instance) return EventsService.instance;
    else {
      EventsService.instance = new EventsService();
      return EventsService.instance;
    }
  }
}
