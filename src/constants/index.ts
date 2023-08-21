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
  sites: '/sites',
  publications: '/publications',
  events: '/events',
  articles: '/articles',
  highlights: '/highlights',
  'artwork-types': '/artwork-types',
  'artwork-date-qualifiers': '/artwork-date-qualifiers',
  'artwork-place-qualifiers': '/artwork-place-qualifiers',
  'agent-roles': '/agent-roles',
  'agent-types': '/agent-types',
  'category-terms': '/category-terms',
  'mobile-sounds': '/mobile-sounds',
  'event-occurrences': '/event-occurrences',
  'event-programs': '/event-programs',
  'static-pages': '/static-pages',
  'generic-pages': '/generic-pages',
  'press-releases': '/press-releases',
  'educator-resources': '/educator-resources',
  'digital-catalogs': '/digital-catalogs',
  'digital-publication-sections': '/digital-publication-sections',
  'printed-catalogs': '/printed-catalogs',
};
