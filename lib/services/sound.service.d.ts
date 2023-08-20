import { IBaseParams } from '../interfaces/base.response.type';
import { ISound } from '../interfaces/sound.service.type';
import { BaseService } from './base.service';
/**
 * @description
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu (opens new window)
 */
export declare class SoundService extends BaseService<ISound, Partial<IBaseParams>> {
    static instance: SoundService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `SoundService` class.
     */
    static get getInstance(): SoundService;
}
