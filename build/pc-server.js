// const path = require('path');
const webpack = require('webpack');
const express = require('express');
// const openBrowserPlugin = require('open-browser-webpack-plugin');
// const proxyMiddleware = require('http-proxy-middleware');
const webpackConfig = require('./webpack.dev.config');
const config = require('../config');
const data = require('../mock/data.json');

const compiler = webpack(webpackConfig);
const port = config.dev.port;
const app = express();
const uri = `http://localhost:${port}`;

// https://github.com/webpack/webpack-dev-middleware
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true, // bundle 信息展示
  },
  quiet: false, // 初始启动信息之外的任何内容都不会被打印到控制台, 来自 webpack 的错误或警告在控制台不可见
  noInfo: true, // 启动时和每次保存之后，webpack 包(bundle)信息的消息将被隐藏,错误和警告仍然会显示
  overlay: true, // 浏览器全屏显示错误或警告信息
  // progress: true // 运行进度输出到控制台
});

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => { },
});

// 改变模板页面内容强制刷新浏览器
// compiler.plugin('compilation', function(compilation) {
//     compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
//         hotMiddleware.publish({
//             action: 'reload'
//         });
//         cb();
//     })
// })

// 模块打包，编译输出
app.use(devMiddleware);
// 开启热加载和状态保存,显示编译错误信息
app.use(hotMiddleware);

// 设置代理,跨域访问api资源
// app.use('/*', proxyMiddleware({
//     target: 'https://api.github.com',
//     changeOrigin: true,
//     logLevel: 'debug'
// }));

// 前端静态数据模拟
app.get('/api/data', (req, res) => (res.send(data)));

devMiddleware.waitUntilValid(() => {
  console.log(`> Listening at ${uri}\n`);
});

// 监听开发端口3000
module.exports = app.listen(port, (error) => {
  if (error) {
    console.error(error);
  }
});
