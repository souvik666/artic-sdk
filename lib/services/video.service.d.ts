import { IBaseParams } from '../interfaces/base.response.type';
import { IVideo } from '../interfaces/vidoe.service.type';
import { BaseService } from './base.service';
/**
 * @description
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu (opens new window)
 */
export declare class VideoService extends BaseService<IVideo, Partial<IBaseParams>> {
    static instance: VideoService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `VideoService` class.
     */
    static get getInstance(): VideoService;
}
