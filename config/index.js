const path = require('path');

// const devEnv = require('./dev.env');/
// const buildEnv = require('./pro.env');
// console.log(devEnv);

module.exports = {
  dev: {
    // env: require('./dev.env'),/
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    port: 8888,
    uiPort: 8889
  },
  build: {
    // env: buildEnv,
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/'
  }
};