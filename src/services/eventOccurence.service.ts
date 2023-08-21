import { paths } from '../constants';
import { IBaseParams } from '../interfaces/base.response.type';
 import { IEventOccurrence } from '../interfaces/eventOccurence.service.type';

import { BaseService } from './base.service';

export class EventsOccurrenceService extends BaseService<IEventOccurrence, IBaseParams> {
  public static instance: EventsOccurrenceService | null = null;
  constructor() {
    super({ path: paths['event-occurrences'] });
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
