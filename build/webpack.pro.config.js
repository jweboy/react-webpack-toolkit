const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const BundleAnalyzerReport = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const baseWebpackConfig = require('./webpack.base.config')
const config = require('../config')
const utils = require('./utils')

baseWebpackConfig.module.rules.push({
  test: /\.scss?$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [{
      loader: 'css-loader',
      options: {
        sourceMap: true,
        modules: true,
        importLoaders: 1,
      },
    }, {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
      },
    }],
  }),
})

const webpackConfig = webpackMerge(baseWebpackConfig, {
  devtool: '#source-map',
  output: {
    path: `${config.build.assetsRoot}/${utils.setDistPath()}`,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.build.env,
    }),
    new webpack.optimize.UglifyJsPlugin({
      conpress: {
        warnings: false,
      },
      sourceMap: true,
    }),
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
    }),
    new OptimizeCssPlugin({
      cssProcessorOptions: {
        safe: true,
      },
    }),
    new HtmlWebpackPlugin({
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
      chunksSortMode: 'dependency', // 允许控制块在添加到页面之前的排序方式
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => (
        module.resource &&
        /\.js$/.test(module.resource) &&
        module.resource.indexOf(
          path.join(__dirname, '../node_modules')
        ) === 0
      ),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'],
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: config.build.assetsSubDirectory,
      ignore: ['.*'],
    }])
  ],
})

// if (config.build.productionGzip) {
//   webpackConfig.plugins.push(
//     new CompressionWebpackPlugin({
//       asset: '[path].gz[query]',
//       algorithm: 'gzip',
//       test: new RegExp(
//         '\\.(' +
//         config.build.productionGzipExtensions.join('|') +
//         ')$'
//       ),
//       threshold: 10240,
//       minRetio: 0.8,
//     })
//   )
// }

// if (config.build.bundleAnalyzerReport) {
//   webpackConfig.plugins.push(new BundleAnalyzerReport())
// }

module.exports = webpackConfig
