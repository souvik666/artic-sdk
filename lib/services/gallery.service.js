"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
/**
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu
 */
class GalleryService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths.galleries });
    }
    /**
     * The above function is a static method in TypeScript that returns a single instance of the
     * GalleryService class using the Singleton design pattern.
     * @returns The `getInstance` method returns an instance of the `GalleryService` class.
     */
    static get getInstance() {
        if (GalleryService.instance)
            return GalleryService.instance;
        else {
            GalleryService.instance = new GalleryService();
            return GalleryService.instance;
        }
    }
}
exports.GalleryService = GalleryService;
GalleryService.instance = null;
//# sourceMappingURL=gallery.service.js.map