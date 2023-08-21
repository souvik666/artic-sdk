"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtWorkDataQualifierService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
/**
 ** WILL HANDLE ALL ARTWORK ROUTES
 * @description https://api.artic.edu/docs/#collections
 */
class ArtWorkDataQualifierService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['artwork-date-qualifiers'] });
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
     * The function returns an instance of the ArtWorkDataQualifier class, creating it if it doesn't already exist.
     * @returns The `getInstance` method returns an instance of the `ArtWorkDataQualifier` class.
     */
    static get getInstance() {
        if (ArtWorkDataQualifierService.instance)
            return ArtWorkDataQualifierService.instance;
        else {
            ArtWorkDataQualifierService.instance = new ArtWorkDataQualifierService();
            return ArtWorkDataQualifierService.instance;
        }
    }
}
exports.ArtWorkDataQualifierService = ArtWorkDataQualifierService;
ArtWorkDataQualifierService.instance = null;
//# sourceMappingURL=artworkDataQualifier.service.js.map