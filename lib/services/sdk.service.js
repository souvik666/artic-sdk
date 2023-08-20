"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticSdk = void 0;
const agent_service_1 = require("./agent.service");
const agentType_service_1 = require("./agentType.service");
const artwork_type_service_1 = require("./artwork.type.service");
const artworkDataQualifier_service_1 = require("./artworkDataQualifier.service");
const artworkPlaceQualifier_service_1 = require("./artworkPlaceQualifier.service");
const artworks_service_1 = require("./artworks.service");
const categoryTerm_service_1 = require("./categoryTerm.service");
const exhibition_service_1 = require("./exhibition.service");
const gallery_service_1 = require("./gallery.service");
const images_service_1 = require("./images.service");
const mobileSound_service_1 = require("./mobileSound.service");
const place_service_1 = require("./place.service");
const product_service_1 = require("./product.service");
const publications_service_1 = require("./publications.service");
const sections_service_1 = require("./sections.service");
const sound_service_1 = require("./sound.service");
const video_service_1 = require("./video.service");
/**
 * @author souvik666
 * @copyright All The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu
 * @description The `ArticSdk` class serves as the entry point for interacting with the Artic Framework's various services and functionalities.
 * It provides static properties that give you access to different service instances for managing agents, artworks, exhibitions,
 * products, places, and galleries.
 *@example
 * Example usage:
 * ```typescript
 * const agentInstance = ArticSdk.agent;
 * const artworkInstance = ArticSdk.artwork;
 * const exhibitionInstance = ArticSdk.exhibition;
 * // ... and so on
 * ```
 */
class ArticSdk {
}
exports.ArticSdk = ArticSdk;
/**
 * A static property that provides access to the `AgentService` instance for managing agents within the Artic Framework.
 * This service allows you to retrieve agent information with pagination and searching.
 *
 * Example usage:
 * ```typescript
 * const agentInstance = ArticSdk.agent;
 * const agents = await agentInstance.get({
 *   params: {
 *     limit: 10,
 *     page: 1,
 *     fields: 'artist_pivots',
 *     ids: '1,2,3,4'
 *   },
 *   config: {} // Any extra header config if needed
 * });
 * const specificAgent = await agentInstance.getOne(agentId);
 * const searchedAgents = await agentInstance.search({
 *   params: {
 *     limit: 10,
 *     page: 1,
 *     fields: 'artist_pivots',
 *     q: 'Hello world',
 *     // ... other search parameters
 *   },
 *   config: {} // Any extra header config if needed
 * });
 * ```
 */
ArticSdk.agent = agent_service_1.AgentService.getInstance;
/**
 * A static property that provides access to the `Artwork` instance for managing artworks within the Artic Framework.
 * This service allows you to retrieve artwork information with pagination and searching.
 *
 * Example usage:
 * ```typescript
 * const artworkInstance = ArticSdk.artwork;
 * const artworks = await artworkInstance.get({
 *   params: {
 *     limit: 10,
 *     page: 1,
 *     fields: 'artist_pivots',
 *     ids: '1,2,3,4'
 *   },
 *   config: {} // Any extra header config if needed
 * });
 * const specificArtwork = await artworkInstance.getOne(artworkId);
 * const searchedArtworks = await artworkInstance.search({
 *   params: {
 *     limit: 10,
 *     page: 1,
 *     fields: 'artist_pivots',
 *     q: 'Mona Lisa',
 *     // ... other search parameters
 *   },
 *   config: {} // Any extra header config if needed
 * });
 * ```
 */
ArticSdk.artwork = artworks_service_1.Artwork.getInstance;
/**
 * A static property that provides access to the `ExhibitionsService` instance for managing exhibitions within the Artic Framework.
 * This service allows you to retrieve exhibition information with pagination and searching.
 *
 * Example usage:
 * ```typescript
 * const exhibitionInstance = ArticSdk.exhibition;
 * const exhibitions = await exhibitionInstance.get({
 *   params: {
 *     limit: 10,
 *     page: 1,
 *     fields: 'artist_pivots',
 *     ids: '1,2,3,4'
 *   },
 *   config: {} // Any extra header config if needed
 * });
 * const specificExhibition = await exhibitionInstance.getOne(exhibitionId);
 * const searchedExhibitions = await exhibitionInstance.search({
 *   params: {
 *     limit: 10,
 *     page: 1,
 *     fields: 'artist_pivots',
 *     q: 'Summer Expo',
 *     // ... other search parameters
 *   },
 *   config: {} // Any extra header config if needed
 * });
 * ```
 */
ArticSdk.exhibition = exhibition_service_1.ExhibitionsService.getInstance;
/**
 * A static property that provides access to the `ProductService` instance for managing products within the Artic Framework.
 * This service allows you to retrieve product information with pagination and searching.
 *
 * Example usage:
 * ```typescript
 * const productInstance = ArticSdk.product;
 * const products = await productInstance.get({
 *   params: {
 *     limit: 10,
 *     page: 1,
 *     fields: 'artist_pivots',
 *     ids: '1,2,3,4'
 *   },
 *   config: {} // Any extra header config if needed
 * });
 * const specificProduct = await productInstance.getOne(productId);
 * const searchedProducts = await productInstance.search({
 *   params: {
 *     limit: 10,
 *     page: 1,
 *     fields: 'artist_pivots',
 *     q: 'Art Supplies',
 *     // ... other search parameters
 *   },
 *   config: {} // Any extra header config if needed
 * });
 * ```
 */
ArticSdk.product = product_service_1.ProductService.getInstance;
/**
 * A static property that provides access to the `PlaceService` instance for managing places within the Artic Framework.
 * This service allows you to retrieve place information with pagination and searching.
 *
 * Example usage:
 * ```typescript
 * const placeInstance = ArticSdk.place;
 * const places = await placeInstance.get({
 *   params: {
 *     limit: 10,
 *     page: 1,
 *     fields: 'artist_pivots',
 *     ids: '1,2,3,4'
 *   },
 *   config: {} // Any extra header config if needed
 * });
 * const specificPlace = await placeInstance.getOne(placeId);
 * const searchedPlaces = await placeInstance.search({
 *   params: {
 *     limit: 10,
 *     page: 1,
 *     fields: 'artist_pivots',
 *     q: 'Museum',
 *     // ... other search parameters
 *   },
 *   config: {} // Any extra header config if needed
 * });
 * ```
 */
ArticSdk.place = place_service_1.PlaceService.getInstance;
/**
 * A static property that provides access to the `GalleryService` instance for managing galleries within the Artic Framework.
 * This service allows you to retrieve gallery information with pagination and searching.
 *
 * Example usage:
 * ```typescript
 * const galleryInstance = ArticSdk.gallery;
 * const galleries = await galleryInstance.get({
 *   params: {
 *     limit: 10,
 *     page: 1,
 *     fields: 'artist_pivots',
 *     ids: '1,2,3,4'
 *   },
 *   config: {} // Any extra header config if needed
 * });
 * const specificGallery = await galleryInstance.getOne(galleryId);
 * const searchedGalleries = await galleryInstance.search({
 *   params: {
 *     limit: 10,
 *     page: 1,
 *     fields: 'artist_pivots',
 *     q: 'Modern Art',
 *     // ... other search parameters
 *   },
 *   config: {} // Any extra header config if needed
 * });
 * ```
 */
ArticSdk.gallery = gallery_service_1.GalleryService.getInstance;
ArticSdk.agentRoles = agent_service_1.AgentService.getInstance;
ArticSdk.agentType = agentType_service_1.AgentTypeService.getInstance;
ArticSdk.artworkType = artwork_type_service_1.ArtWorkTypeService.getInstance;
ArticSdk.artworkDataQualifier = artworkDataQualifier_service_1.ArtWorkDataQualifierService.getInstance;
ArticSdk.artworkPlaceQualifier = artworkPlaceQualifier_service_1.ArtworkPlaceQualifierService.getInstance;
ArticSdk.categoryTerm = categoryTerm_service_1.CategoryTermService.getInstance;
ArticSdk.publication = publications_service_1.PublicationService.getInstance;
ArticSdk.mobileSound = mobileSound_service_1.MobileSoundService.getInstance;
ArticSdk.section = sections_service_1.SectionService.getInstance;
ArticSdk.image = images_service_1.ImageService.getInstance;
ArticSdk.video = video_service_1.VideoService.getInstance;
ArticSdk.sound = sound_service_1.SoundService.getInstance;
ArticSdk.text = sound_service_1.SoundService.getInstance;
//# sourceMappingURL=sdk.service.js.map