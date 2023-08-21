import { paths } from '../constants';
import { IArticle } from '../interfaces/articale.service.type';
import { IBaseParams } from '../interfaces/base.response.type';
 
import { BaseService } from './base.service';

export class ArticleService extends BaseService<IArticle, IBaseParams> {
  public static instance: ArticleService | null = null;
  constructor() {
    super({ path: paths.articles });
  }

  /**
   * The above function is a singleton pattern implementation in TypeScript.
   * @returns The `getInstance` method returns an instance of the `ArticleService` class.
   */
  public static get getInstance() {
    if (ArticleService.instance) return ArticleService.instance;
    else {
      ArticleService.instance = new ArticleService();
      return ArticleService.instance;
    }
  }
}
