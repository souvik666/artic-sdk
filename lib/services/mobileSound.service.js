"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileSoundService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
/**
 * @description
 * The data in this response may be protected by copyright, and other restrictions, of the Art Institute of Chicago and third parties. You may use this data for noncommercial educational and personal use and for "fair use" as authorized under law, provided that you also retain all copyright and other proprietary notices contained on the materials and cite the author and source of the materials
 */
class MobileSoundService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['mobile-sounds'] });
    }
    /**
     * The above function is a singleton pattern implementation in TypeScript.
     * @returns The `getInstance` method returns an instance of the `MobileSoundService` class.
     */
    static get getInstance() {
        if (MobileSoundService.instance)
            return MobileSoundService.instance;
        else {
            MobileSoundService.instance = new MobileSoundService();
            return MobileSoundService.instance;
        }
    }
}
exports.MobileSoundService = MobileSoundService;
MobileSoundService.instance = null;
//# sourceMappingURL=mobileSound.service.js.map