const SERVER = 'http://localhost:8080/magnoliaAuthor';

const HOST = 'http://localhost:8080';
const MAGNOLIA_BASE = '/magnoliaAuthor';
const APP_BASE = '/angular-minimal';

export const environment = {
  host: HOST,
  magnoliaBase: MAGNOLIA_BASE,
  appBase: APP_BASE,

  server: SERVER,
  rootPath: '/angular-minimal',
  restUrlBase: SERVER + '/.rest/delivery/pages/v1',
  templateDefinitionBase: SERVER + '/.rest/templateDefinition/v1',
  navUrl: HOST + MAGNOLIA_BASE + '/.rest/delivery/pagenav/v1',

  damRawUrl: HOST,
  inEditor: true,

  languages: ['en', 'de'],
};
