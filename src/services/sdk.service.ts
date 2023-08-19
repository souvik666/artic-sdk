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
export class ArticSdk {
  public static agent = AgentService.getInstance;
  public static artwork = Artwork.getInstance;
  public static exhibition = ExhibitionsService.getInstance;
  public static product = ProductService.getInstance;
  public static place = PlaceService.getInstance;
  public static gallery = GalleryService.getInstance;
}
