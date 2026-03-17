
export default {
  basePath: 'https://github.com/HassanNaeemm/MyAngularTestDeploy',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
