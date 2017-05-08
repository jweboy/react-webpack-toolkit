const path = require('path');
const webpack = require('webpack');
const browserSync = require('browser-sync');
const express = require('express');

const webpackConfig = require('./webpack.dev.config');
const config = require('../config');
const data = require('../mock/data.json');

const compiler = webpack(webpackConfig);
const port = config.dev.port;
const uiPort = config.dev.uiPort;
const uri = 'http://localhost:' + port;
const router = express.Router();
const app = express();

// https://github.com/webpack/webpack-dev-middleware
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true, // bundle信息展示
    assets: true, // 增加资源信息
    version: true, // 增加 webpack 版本信息
    hash: true,  // 增加编译的哈希值
    timings: true, // 增加时间信息
    children: true, // 增加子级的信息
    errors: true, // 增加错误信息
    errorDetail: true, // 增加错误的详细信息（类似解析日志）
    modules: false, // 增加内置的模块信息
    chunks: false, // 增加包信息（设置为 `false` 能允许较少的冗长输出）
    chunkModules: false  // 将内置模块信息增加到包信息
  },
  inline: true, // 内联模式,处理实时重载的脚本被插入到你的包(bundle)中，并且构建消息将会出现在浏览器控制台处理实时重载的脚本被插入到你的包(bundle)中，并且构建消息将会出现在浏览器控制台
  quiet: false, // 初始启动信息之外的任何内容都不会被打印到控制台, 来自 webpack 的错误或警告在控制台不可见
  noInfo: false, // 启动时和每次保存之后，webpack 包(bundle)信息的消息将被隐藏,错误和警告仍然会显示
  overlay: true, // 浏览器全屏显示错误或警告信息
  progress: true // 运行进度输出到控制台
});


const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => { }
});

// 设置代理,跨域访问api资源
// const proxyMiddleware = require('http-proxy-middleware')({
//     target: 'https://api.github.com',
//     changeOrigin: true,
//     logLevel: 'debug'
// });

// 前端静态路由模拟数据请求
router.get('/api/data', (req, res, next) => (res.send(data)));

// 在express中注册路由
app.use(router);

// 开启服务，加载app中间件
browserSync({
  port: port,
  ui: {
    port: uiPort
  },
  logPrefix: process.env.NODE_ENV,
  reloadOnRestart: true,
  open: false,
  server: {
    baseDir: 'src',
    middleware: [
      devMiddleware,
      hotMiddleware,
      //proxyMiddleware
      app
    ]
  },
  file: [
    '/index.html'
  ]
});

devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n');
})

