import { paths } from '../constants';
import { IBaseParams } from '../interfaces/base.response.type';
import { IEventProgram } from '../interfaces/eventProgram.service.type';

import { BaseService } from './base.service';

export class EventsOccurrenceService extends BaseService<IEventProgram, IBaseParams> {
  public static instance: EventsOccurrenceService | null = null;
  constructor() {
    super({ path: paths['event-programs'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
   */
  public static get getInstance() {
    if (EventsOccurrenceService.instance) return EventsOccurrenceService.instance;
    else {
      EventsOccurrenceService.instance = new EventsOccurrenceService();
      return EventsOccurrenceService.instance;
    }
  }
}
