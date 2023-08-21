import { paths } from '../constants';
import { IBaseParams } from '../interfaces/base.response.type';
import { IEventProgram } from '../interfaces/eventProgram.service.type';
import { IHighlights } from '../interfaces/highlight.service.type';

import { BaseService } from './base.service';

export class HighlightService extends BaseService<IHighlights, IBaseParams> {
  public static instance: HighlightService | null = null;
  constructor() {
    super({ path: paths['highlights'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `EventsOccurenceService` class.
   */
  public static get getInstance() {
    if (HighlightService.instance) return HighlightService.instance;
    else {
      HighlightService.instance = new HighlightService();
      return HighlightService.instance;
    }
  }
}
