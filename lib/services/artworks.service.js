"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Artwork = void 0;
const constants_1 = require("../constants");
const base_service_1 = require("./base.service");
/**
 ** WILL HANDLE ALL ARTWORK ROUTES
 * @description https://api.artic.edu/docs/#collections
 */
class Artwork extends base_service_1.BaseService {
    constructor() {
        super({ path: constants_1.paths.artworks });
    }
    /**
     ** ARTWORK INSTANCE
     */
    static get getInstance() {
        if (Artwork.instance)
            return Artwork.instance;
        else {
            Artwork.instance = new Artwork();
            return Artwork.instance;
        }
    }
}
exports.Artwork = Artwork;
Artwork.instance = null;
//# sourceMappingURL=artworks.service.js.map