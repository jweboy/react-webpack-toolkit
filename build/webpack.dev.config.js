const webpack = require('webpack');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

// const config = require('../config');
const baseWebpackConfig = require('./webpack.base.config');
const webpackHotClient = 'webpack-hot-middleware/client?noInfo=true&reload=true';


baseWebpackConfig.entry.unshift(
    // 'react-hot-loader/patch',
    webpackHotClient
);
// console.log(baseWebpackConfig);

module.exports = merge(baseWebpackConfig, {
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
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
        })
    ]
});