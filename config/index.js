const path = require('path');
const devEnv = require('./dev.env')
const buildEnv = require('./pro.env')

module.exports = {
  dev: {
    env: devEnv,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    port: 8888,
    uiPort: 8889,
    template: {
      template: 'index.html',
      filename: 'index.html',
      favicon: './favicon.ico',
      title: '开发模式',
      hash: true,
    },
  },
  build: {
    env: buildEnv,
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    template: {
      filename: 'index.html',
      template: 'index.html',
      inject: 'body',
      title: '线上模式',
      favicon: './favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true, // 压缩行内style标签
        minifyJS: true, // 压缩行内script标签
        removeAttributeQuotes: true,
      },
      chunksSortMode: 'dependency', //允许控制块在添加到页面之前的排序方式
    },
  },
};
