//* https://api.artic.edu/docs/#collections */

const BASEURL = new URL('https://api.artic.edu/api/v1');
export const V1 = new URL(BASEURL);

export const paths = {
  artworks: '/artworks',
  agents: '/agents',
  places: '/places',
  galleries: '/galleries',
  exhibitions: '/exhibitions',
  products: '/products',
  texts: '/texts',
  sounds: '/sounds',
  images: '/images',
  videos: '/videos',
  tours: '/tours',
  sections: '/sections',
  publications: '/publications',
  'artwork-types': '/artwork-types',
  'artwork-date-qualifiers': '/artwork-date-qualifiers',
  'artwork-place-qualifiers': '/artwork-place-qualifiers',
  'agent-roles': '/agent-roles',
  'agent-types': '/agent-types',
  'category-terms': '/category-terms',
  'mobile-sounds': '/mobile-sounds',
};
