"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
/**
 * @description
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu (opens new window)
 */
class ImageService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['images'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `ImageService` class.
     */
    static get getInstance() {
        if (ImageService.instance)
            return ImageService.instance;
        else {
            ImageService.instance = new ImageService();
            return ImageService.instance;
        }
    }
}
exports.ImageService = ImageService;
ImageService.instance = null;
//# sourceMappingURL=images.service.js.map