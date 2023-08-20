import { paths } from '../constants';

import { IBaseParams } from '../interfaces/base.response.type';
import { IVideo } from '../interfaces/vidoe.service.type';
import { BaseService } from './base.service';
/**
 * @description
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu (opens new window)
 */
export class VideoService extends BaseService<IVideo, Partial<IBaseParams>> {
  public static instance: VideoService | null = null;
  constructor() {
    super({ path: paths['videos'] });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `VideoService` class.
   */
  public static get getInstance() {
    if (VideoService.instance) return VideoService.instance;
    else {
      VideoService.instance = new VideoService();
      return VideoService.instance;
    }
  }
}
