var path = require('path');
var webpack = require('webpack');
var baseConfig = require('./webpack.config');
var HTMLWebpackPlugin = require('html-webpack-plugin');

baseConfig.devtool = 'cheap-module-eval-source-map';

baseConfig.entry.unshift(
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true'
);

baseConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development')
        }
    }),
    new HTMLWebpackPlugin({
        template: __dirname + '/index.html',
        title: '开发模式',
        favicon: './favicon.ico',
        filename: 'index.html',
        minify: {
            removeComments: true,
            collapseWhitespace: true
        },
        hash: true,
        inject: 'body' // 脚本注入位置 设置true 或者 body 将打包的脚本放在页面底部
    })
);

// console.log(baseConfig)
module.exports = baseConfig;
