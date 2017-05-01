var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
// var openBrowserPlugin = require('open-browser-webpack-plugin');
var baseConfig = require('./webpack.config');

baseConfig.devtool = 'source-map';

baseConfig.entry.vendor = [
    'axios',
    'react',
    'react-dom'
]; // 提取库中相似代码进行切割、提取与合并

var JSPARH = "assets/js/";

baseConfig.output.path = path.resolve(__dirname, 'release');
baseConfig.output.publicPath = './';
baseConfig.output.filename = JSPARH + '[name].[chunkhash:8].min.js'; // 编译后的文件名称
baseConfig.output.chunkFilename = JSPARH + '[name].[chunkhash:8].min.js'; // 按需加载的文件名称

baseConfig.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    //压缩js文件
    new webpack.optimize.UglifyJsPlugin({
        // sourceMap:true,
        compress: {
            warnings: false //压缩
        },
        output: {
            comments: false // 移除所有注释
        }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', JSPARH + 'vendor.[chunkhash:8].min.js'),
    new HTMLWebpackPlugin({
        template: __dirname + '/index.html',
        title: '产品模式',
        filename: 'index.html',
        favicon: './favicon.ico',
        inject: 'body',
        chunk: ['vendor', 'index'],
        hash: true,
        minify: {
            removeComments: true, // 移除所有注释
            collapseWhitespace: true
        }
    })
);
module.exports = baseConfig;
