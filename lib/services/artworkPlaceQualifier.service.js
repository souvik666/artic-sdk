"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworkPlaceQualifierService = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
/**
 ** WILL HANDLE ALL ARTWORK ROUTES
 * @description
 * The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu
 */
class ArtworkPlaceQualifierService extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths['artwork-place-qualifiers'] });
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
     * The function returns an instance of the ArtworkPlaceQualifierService class, creating it if it doesn't already exist.
     * @returns The `getInstance` method returns an instance of the `ArtworkPlaceQualifierService` class.
     */
    static get getInstance() {
        if (ArtworkPlaceQualifierService.instance)
            return ArtworkPlaceQualifierService.instance;
        else {
            ArtworkPlaceQualifierService.instance = new ArtworkPlaceQualifierService();
            return ArtworkPlaceQualifierService.instance;
        }
    }
}
exports.ArtworkPlaceQualifierService = ArtworkPlaceQualifierService;
ArtworkPlaceQualifierService.instance = null;
//# sourceMappingURL=artworkPlaceQualifier.service.js.map