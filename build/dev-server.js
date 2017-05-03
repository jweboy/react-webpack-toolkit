// const path = require('path');
const webpack = require('webpack');
const express = require('express');
// const openBrowserPlugin = require('open-browser-webpack-plugin');
// const proxyMiddleware = require('http-proxy-middleware');
const webpackConfig = require('./webpack.dev.config');
const config = require('../config');

const compiler = webpack(webpackConfig);
const port = config.dev.port;
const app = express();
const uri = 'http://localhost:' + port;
// const proxy = proxyMiddleware('/users', {
//     target: 'https://api.github.com',
//     changeOrigin: true
// });

// https://github.com/webpack/webpack-dev-middleware
const devServer = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true // bundle 信息展示
    },
    quiet: false, // 初始启动信息之外的任何内容都不会被打印到控制台, 来自 webpack 的错误或警告在控制台不可见
    noInfo: true, // 启动时和每次保存之后，webpack 包(bundle)信息的消息将被隐藏,错误和警告仍然会显示
    overlay: true, // 浏览器全屏显示错误或警告信息
    progress: true // 运行进度输出到控制台
});

const HotServer = require('webpack-hot-middleware')(compiler, {
    log: () => { }
});

app.use(devServer);
app.use(HotServer);

devServer.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n');
})

//监听开发端口3000
module.exports = app.listen(port, (error) => {
    if (error) {
        console.error(error);
        return;
    }
});
