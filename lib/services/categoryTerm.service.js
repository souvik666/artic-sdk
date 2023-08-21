"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryTermService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
/**
 * @description
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu (opens new window)
 */
class CategoryTermService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['category-terms'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `CategoryTermService` class.
     */
    static get getInstance() {
        if (CategoryTermService.instance)
            return CategoryTermService.instance;
        else {
            CategoryTermService.instance = new CategoryTermService();
            return CategoryTermService.instance;
        }
    }
}
exports.CategoryTermService = CategoryTermService;
CategoryTermService.instance = null;
//# sourceMappingURL=categoryTerm.service.js.map