import { IArticle } from '../interfaces/articale.service.type';
import { IBaseParams } from '../interfaces/base.response.type';
import { BaseService } from './base.service';
export declare class ArticleService extends BaseService<IArticle, IBaseParams> {
    static instance: ArticleService | null;
    constructor();
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `ArticleService` class.
     */
    static get getInstance(): ArticleService;
}
