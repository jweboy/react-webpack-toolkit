const webpack = require('webpack');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const config = require('../config');
const baseWebpackConfig = require('./webpack.base.config');

const babelPolyfill = 'babel-polyfill';
const reactHotClient = 'react-hot-loader/patch';
const webpackHotMiddlewareClient = 'webpack-hot-middleware/client?reload=true';

baseWebpackConfig.entry.unshift(
  babelPolyfill,
  reactHotClient, // 开启模块热替换(HMR)
  webpackHotMiddlewareClient
);

module.exports = merge(baseWebpackConfig, {
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env,
    }),
    new webpack.HotModuleReplacementPlugin(), // 开启全局的模块热替换(HMR)
    new webpack.NamedModulesPlugin(), // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/geowarin/friendly-errors-webpack-plugin
    new FriendlyErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HTMLWebpackPlugin(config.dev.template),
  ],
});
