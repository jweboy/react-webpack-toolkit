const path = require('path')
const webpack = require('webpack')
const browserSync = require('browser-sync')
const express = require('express')
const ora = require('ora')
const connectHistoryApiFallback = require('connect-history-api-fallback')

const webpackConfig = require('./webpack.dev.config')
const config = require('../config')
// const data = require('../mock/data.json')

// declare the development environment variable
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const compiler = webpack(webpackConfig)
const port = config.dev.port
const uiPort = config.dev.uiPort
const uri = `http://localhost:${port}`
// const router = express.Router()
const app = express()

// serve webpack bundle output
const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true, // 多个颜色显示bundle信息
  },
  quiet: true, // 不显示任何bundle信息
  noInfo: true, // 只显示错误和警告bundle信息
})

// enable hot-reload and state-preserving
// compilation error display
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  // reload: true,
  // log: () => { },
})

// TODO 设置项目接口代理、编写mock数据、线上json管理
// 设置代理,跨域访问api资源
// const proxyMiddleware = require('http-proxy-middleware')({
//     target: 'https://api.github.com',
//     changeOrigin: true,
//     logLevel: 'debug'
// })
// 前端静态路由模拟数据请求
// router.get('/api/data', (req, res) => (res.send(data)))
// 在express中注册路由
// app.use(router)

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

// run browsersync and use middleware for Hot Module Replacement
const browserSyncConfig = {
  port,
  ui: {
    port: uiPort,
  },
  logPrefix: process.env.NODE_ENV,
  reloadOnRestart: true,
  open: true,
  server: {
    baseDir: '/src',
    middleware: [
      devMiddleware,
      hotMiddleware,
      // proxyMiddleware
      connectHistoryApiFallback(),
      app,
    ],
  },
  file: [
    '/index.html',
  ],
}

const spinner = ora('Starting dev server...')
spinner.start()

// wait for the middleware to load after opening the service
devMiddleware.waitUntilValid(() => {
  spinner.succeed(`Listening at ${uri}\n`)

  browserSync(browserSyncConfig)
})
