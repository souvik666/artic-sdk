"use strict";
//* https://api.artic.edu/docs/#collections */
Object.defineProperty(exports, "__esModule", { value: true });
exports.paths = exports.V1 = void 0;
const BASEURL = new URL("https://api.artic.edu/api/v1");
exports.V1 = new URL(BASEURL);
exports.paths = {
    artworks: "/artworks",
    agents: "/agents",
    places: "/places",
    galleries: "/galleries",
    exhibitions: "/exhibitions",
    products: "/products",
    texts: "/texts",
    sounds: "/sounds",
};
//# sourceMappingURL=index.js.map