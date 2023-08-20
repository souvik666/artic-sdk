"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtWorkTypeService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
/**
 ** WILL HANDLE ALL ARTWORK ROUTES
 * @description https://api.artic.edu/docs/#collections
 */
class ArtWorkTypeService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['artwork-types'] });
    }
    /**
     *
     * @deprecated PLEASE DON'T USE THIS FEATURE AGENT ROLES
     * DOESN'T SUPPORT THIS CURRENTLY
     * @see https://api.artic.edu/docs/#collections
     * @returns
     */
    search({ config, params, }) {
        return super.search({ config, params });
    }
    /**
     * The function returns an instance of the ArtWorkTypeService class, creating it if it doesn't already exist.
     * @returns The `getInstance` method returns an instance of the `ArtWorkTypeService` class.
     */
    static get getInstance() {
        if (ArtWorkTypeService.instance)
            return ArtWorkTypeService.instance;
        else {
            ArtWorkTypeService.instance = new ArtWorkTypeService();
            return ArtWorkTypeService.instance;
        }
    }
}
exports.ArtWorkTypeService = ArtWorkTypeService;
ArtWorkTypeService.instance = null;
//# sourceMappingURL=artwork.type.service.js.map