"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticSdk = void 0;
const agent_service_1 = require("./agent.service");
const artworks_service_1 = require("./artworks.service");
const exhibition_service_1 = require("./exhibition.service");
const gallery_service_1 = require("./gallery.service");
const place_service_1 = require("./place.service");
const product_service_1 = require("./product.service");
/**
 * Artic api SDK
 * All The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu
 */
class ArticSdk {
}
exports.ArticSdk = ArticSdk;
ArticSdk.agent = agent_service_1.AgentService.getInstance;
ArticSdk.artwork = artworks_service_1.Artwork.getInstance;
ArticSdk.exhibition = exhibition_service_1.ExhibitionsService.getInstance;
ArticSdk.product = product_service_1.ProductService.getInstance;
ArticSdk.place = place_service_1.PlaceService.getInstance;
ArticSdk.gallery = gallery_service_1.GalleryService.getInstance;
//# sourceMappingURL=sdk.service.js.map