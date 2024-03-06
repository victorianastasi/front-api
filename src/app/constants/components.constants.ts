// export const URL_BASE = "https://obelisco.com/";
export const URL_BASE = 'https://obelisco-back-production.up.railway.app';

export interface DocumentData {
  title: string;
  route?: string;
  items?: DocumentData[];
  id?: string;
}

export const DOCS_SEARCH: DocumentData[] = [
  { title: 'Footer - Imágenes', route: '/docs/footer/images' },
  { title: 'Footer - Teléfonos', route: '/docs/footer/phones' },
  { title: 'Footer - Enlaces', route: '/docs/footer/links' },
  { title: 'Footer - Redes sociales', route: '/docs/footer/networks' },
  { title: 'Footer - Todos', route: '/docs/footer/all' },
  { title: 'Resolución', route: '/docs/resolution' },
  { title: 'Versiones - Todos', route: '/docs/versions/all' },
  { title: 'Versiones - Listado', route: '/docs/versions/list' },
  { title: 'Versiones - Número de versión', route: '/docs/versions/number' },
];
export const NAVIGATION_DOCS: DocumentData[] = [
  {
    title: 'Footer',
    route: '/docs/footer',
    id: 'collapseFooter',
    items: [
      { title: 'Todos', route: '/docs/footer/all' },
      { title: 'Imágenes', route: '/docs/footer/images' },
      { title: 'Enlaces', route: '/docs/footer/links' },
      { title: 'Teléfonos', route: '/docs/footer/phones' },
      { title: 'Redes Sociales', route: '/docs/footer/networks' },
    ],
  },
  {
    title: 'Resolución',
    route: '/docs/resolution',
    id: 'collapseResolution',
    items: [{ title: 'Resolución', route: '/docs/resolution' }],
  },
  {
    title: 'Versiones',
    route: '/docs/versions',
    id: 'collapseVersions',
    items: [
      { title: 'Todas', route: '/docs/versions/all' },
      { title: 'Listado', route: '/docs/versions/list' },
      { title: 'Número de versión', route: '/docs/versions/number' },
    ],
  },
];
