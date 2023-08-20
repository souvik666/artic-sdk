import { AgentService } from './agent.service';
import { AgentTypeService } from './agentType.service';
import { ArtWorkTypeService } from './artwork.type.service';
import { ArtWorkDataQualifierService } from './artworkDataQualifier.service';
import { ArtworkPlaceQualifierService } from './artworkPlaceQualifier.service';
import { Artwork } from './artworks.service';
import { CategoryTermService } from './categoryTerm.service';
import { ExhibitionsService } from './exhibition.service';
import { GalleryService } from './gallery.service';
import { ImageService } from './images.service';
import { MobileSoundService } from './mobileSound.service';
import { PlaceService } from './place.service';
import { ProductService } from './product.service';
import { PublicationService } from './publications.service';
import { SectionService } from './sections.service';
import { SoundService } from './sound.service';
import { VideoService } from './video.service';

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
export class ArticSdk {
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
  public static agent = AgentService.getInstance;

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
  public static artwork = Artwork.getInstance;

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
  public static exhibition = ExhibitionsService.getInstance;

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
  public static product = ProductService.getInstance;

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
  public static place = PlaceService.getInstance;

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
  public static gallery = GalleryService.getInstance;

  public static agentRoles = AgentService.getInstance;

  public static agentType = AgentTypeService.getInstance;

  public static artworkType = ArtWorkTypeService.getInstance;

  public static artworkDataQualifier = ArtWorkDataQualifierService.getInstance;
  public static artworkPlaceQualifier =
    ArtworkPlaceQualifierService.getInstance;

  public static categoryTerm = CategoryTermService.getInstance;
  public static publication = PublicationService.getInstance;
  public static mobileSound = MobileSoundService.getInstance;
  public static section = SectionService.getInstance;

  public static image = ImageService.getInstance;
  public static video = VideoService.getInstance;
  public static sound = SoundService.getInstance;
  public static text = SoundService.getInstance;
}
