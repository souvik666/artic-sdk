import { AgentService } from "./agent.service";
import { Artwork } from "./artworks.service";
import { ExhibitionsService } from "./exhibition.service";
import { GalleryService } from "./gallery.service";
import { PlaceService } from "./place.service";
import { ProductService } from "./product.service";
/**
 * Artic api SDK
 * All The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu
 */
export declare class ArticSdk {
    static agent: AgentService;
    static artwork: Artwork;
    static exhibition: ExhibitionsService;
    static product: ProductService;
    static place: PlaceService;
    static gallery: GalleryService;
}
