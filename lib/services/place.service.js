"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
/**
 * The data in this response is licensed under a Creative Commons Attribution 4.0 Generic License (CC-By) and the
 * Terms and Conditions of artic.edu (opens new window). Contains information from the J. Paul Getty Trust, Getty Research Institute, the Getty Thesaurus of Geographic Names,
 * which is made available under the ODC Attribution License.
 */
class PlaceService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths.places });
    }
    /**
     ** PlaceService INSTANCE
     */
    static get getInstance() {
        if (PlaceService.instance)
            return PlaceService.instance;
        else {
            PlaceService.instance = new PlaceService();
            return PlaceService.instance;
        }
    }
}
exports.PlaceService = PlaceService;
PlaceService.instance = null;
//# sourceMappingURL=place.service.js.map