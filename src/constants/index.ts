//* https://api.artic.edu/docs/#collections */

const BASEURL = new URL("https://api.artic.edu/api/v1");
export const V1 = new URL(BASEURL);

export const paths = {
  artworks: "/artworks",
  agents: "/agents",
  places: "/places",
  galleries: "/galleries",
  exhibitions: "/exhibitions",
  products: "/products",
  texts: "/texts",
  sounds: "/sounds",
};
