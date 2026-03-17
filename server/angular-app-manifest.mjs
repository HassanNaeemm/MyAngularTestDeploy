
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/HassanNaeemm/MyAngularTestDeploy',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/HassanNaeemm/MyAngularTestDeploy"
  },
  {
    "renderMode": 2,
    "route": "/HassanNaeemm/MyAngularTestDeploy/confidential"
  },
  {
    "renderMode": 2,
    "route": "/HassanNaeemm/MyAngularTestDeploy/login"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1254, hash: '370a5d74c2b5be8299d5c766a4d95e7ae38d77112a00401b312a12b56805b91b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1770, hash: 'f48102b8a2b3ac6540007ee7a33578160774551af68643c3cf96ea13a39ae27c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3267, hash: '69e0fec0b4ed1c586c77150e15008e2abcef135945c96bf055c527dc1946d51f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'confidential/index.html': {size: 3711, hash: 'b91030c1a6198f67119350a003b84b26c02ccd371d6f9df5f5d87019cdda71fa', text: () => import('./assets-chunks/confidential_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 3711, hash: 'b91030c1a6198f67119350a003b84b26c02ccd371d6f9df5f5d87019cdda71fa', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
