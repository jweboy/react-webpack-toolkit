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

const devServer = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
});

const HotServer = require('webpack-hot-middleware')(compiler, {
    log: () => { }
});

app.use(devServer);
app.use(HotServer);

devServer.waitUntilValid(() => {
    console.log('> Listening at' + uri + '\n');
})

//监听开发端口3000
module.exports = app.listen(port, (error) => {
    if (error) {
        console.error(error);
        return;
    }
});
