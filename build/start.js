// process.env.NODE_ENV = 'development'

// const webpack = require('webpack')
// const ora = require('ora')
// const WebpackDevServer = require('webpack-dev-server')

// const webpackConfig = require('./webpack.dev.config')
// const config = require('./config')

// const serverOptions = Object.assign({}, config.server, {
//   before () {
//     spinner.start()
//   }
// })

// WebpackDevServer.addDevServerEntrypoints(webpackConfig, serverOptions)

// const compiler = webpack(webpackConfig)
// const spinner = ora('Starting development server...')
// const devServer = new WebpackDevServer(compiler, serverOptions)

// const PORT = process.env.PORT || config.server.port
// const HOST = process.env.HOST || config.server.host

// devServer.listen(PORT, HOST, err => {
//   if (err) {
//     process.exit(1)
//   }
//   spinner.succeed(`server is listen on ${HOST}:${PORT}`)
// })
