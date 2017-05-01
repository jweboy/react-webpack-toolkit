var path = require('path');
// var express = require('express');
var webpack = require('webpack');

// var openBrowserPlugin = require('open-browser-webpack-plugin');
var proxyMiddleware = require('http-proxy-middleware');
var browserSync = require('browser-sync');
var webpackDevMiddle = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.dev.config'),
    compiler = webpack(config);

var proxy = proxyMiddleware('/users', {
    target: 'https://api.github.com',
    changeOrigin: true
});

browserSync({
    port: 8888,
    ui: {
        port: 8889
    },
    logPrefix: "开发模式",
    // open: false,
    reloadOnRestart: true,
    notify: true,
    server: {
        baseDir: 'src',

        middleware: [
            webpackDevMiddle(compiler, {
                publichPath: config.output.publichPath,
                noInfo: false,
                quiet: false,
                inline: true,
                progress: true,
                stats: {
                    colors: true,
                    assets: false,
                    modules: false,
                    version: false,
                    hash: false,
                    timings: false,
                    children: false,
                    chunks: false,
                    chunkModules: false
                }
            }),

            webpackHotMiddleware(compiler),

            proxy
        ]
    },
    file: [
        '/index.html'
    ]
})

//监听开发端口3000
// app.listen(port, (error) => {
//     if (error) {
//         console.error(error);
//     }
//     console.log("静态开发服务器已启动,将自动打开浏览器并访问http://localhost:%s/", port);
// });
