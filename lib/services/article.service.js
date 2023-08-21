"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
class ArticleService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths.articles });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `ArticleService` class.
     */
    static get getInstance() {
        if (ArticleService.instance)
            return ArticleService.instance;
        else {
            ArticleService.instance = new ArticleService();
            return ArticleService.instance;
        }
    }
}
exports.ArticleService = ArticleService;
ArticleService.instance = null;
//# sourceMappingURL=article.service.js.map