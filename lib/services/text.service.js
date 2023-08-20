"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
/**
 * @description
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu (opens new window)
 */
class TextService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['texts'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `TextService` class.
     */
    static get getInstance() {
        if (TextService.instance)
            return TextService.instance;
        else {
            TextService.instance = new TextService();
            return TextService.instance;
        }
    }
}
exports.TextService = TextService;
TextService.instance = null;
//# sourceMappingURL=text.service.js.map