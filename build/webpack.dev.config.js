const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const px2rem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');

// const config = require('../config');
const baseWebpackConfig = require('./webpack.base.config');
const babelPolyfill = 'babel-polyfill';
const reactHotClient = 'react-hot-loader/patch';
const webpackHotClient = 'webpack/hot/only-dev-server';
const webpackHotMiddlewareClient = 'webpack-hot-middleware/client?noInfo=true&reload=true';

baseWebpackConfig.entry.unshift(
  babelPolyfill,
  reactHotClient, // 开启模块热替换(HMR)
  webpackHotMiddlewareClient,
  webpackHotClient
);

const resolve = (dir) => (path.join(__dirname, '..', dir));

const srcPath = resolve('src');
const nodeModulesPath = resolve('node_modules');

baseWebpackConfig.module.rules.unshift({
  test: /\.js[x]$/,
  enforce: 'pre',
  use: [
    {
      loader: 'eslint-loader',
      options: {
        fix: true
      }
    }
  ],
  exclude: nodeModulesPath,
  include: srcPath
})
console.log(baseWebpackConfig.module.rules);

module.exports = merge(baseWebpackConfig, {
  // devtool: 'cheap-eval-source-map',
  devtool: 'eval',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(), // 开启全局的模块热替换(HMR)
    new webpack.NamedModulesPlugin(), // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/geowarin/friendly-errors-webpack-plugin
    new FriendlyErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HTMLWebpackPlugin({
      template: 'index.html',
      title: '开发模式',
      favicon: './favicon.ico',
      filename: 'index.html',
      hash: true,
      inject: 'body' // 脚本注入位置 设置true 或者 body 将打包的脚本放在页面底部
    }),
  ]
});
