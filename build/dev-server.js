const path = require('path')
const webpack = require('webpack')
const browserSync = require('browser-sync')
const express = require('express')
const ora = require('ora')
const winston = require('winston')
const bodyParser = require('body-parser')
const httpProxyMiddleware = require('http-proxy-middleware')
const connectHistoryApiFallback = require('connect-history-api-fallback')
// const easyMonitor = require('easy-monitor')
const md5 = require('md5')

const webpackConfig = require('./webpack.dev.config')
const config = require('../config')

// 添加node性能检测工具
// easyMonitor('recat-webpack-biolerplate')

// const data = require('../mock/data.json')

// declare the development environment variable
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const compiler = webpack(webpackConfig)
const port = config.dev.port
const uiPort = config.dev.uiPort
const uri = `http://localhost:${port}`
const APIURL = 'https://easy-mock.com/mock/591534589aba4141cf221a76/react/biolerplate'
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
  // log: () => {},
})

// TODO 设置项目接口代理、编写mock数据、线上json管理
// 设置代理,跨域访问api资源
const proxyMiddleware = httpProxyMiddleware('/mock/*', {
  target: APIURL,
  changeOrigin: true,
  logLevel: 'debug',
  logProvider: () => (winston),
  onError: (err, req, res) => {
    res.writeHead({
      'Content-Type': 'text/plain',
    })

    res.send('Something went wrong. And we are reporting a custom error message.')
  },
})

app.use(bodyParser.urlencoded({
  extended: true,
}))
app.use(bodyParser.json())

// 前端静态路由模拟数据请求
app.post('/api/login', (req, res) => {
  console.log('api res', req.body)
  const { body } = req
  let params = ''

  Object.keys(body).map(item => (params += body[item]))
  body.token = md5(params);
  res.send(body)
})

app.post('/report', (req, res) => {
  res.send(req.body)
})

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
      proxyMiddleware,
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
