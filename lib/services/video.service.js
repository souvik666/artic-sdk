"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
/**
 * @description
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu (opens new window)
 */
class VideoService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['videos'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `VideoService` class.
     */
    static get getInstance() {
        if (VideoService.instance)
            return VideoService.instance;
        else {
            VideoService.instance = new VideoService();
            return VideoService.instance;
        }
    }
}
exports.VideoService = VideoService;
VideoService.instance = null;
//# sourceMappingURL=video.service.js.map