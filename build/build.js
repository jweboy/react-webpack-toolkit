const rimraf = require('rimraf')
const path = require('path')
const webpack = require('webpack')
const ora = require('ora')
const chalk = require('chalk')

const webpackProConfig = require('./webpack.pro.config')
const config = require('../config')

const spinner = ora('Building for production...')
process.env.NODE_ENV = 'production'

spinner.start()

rimraf(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), (error) => {
  if (error) {
    return spinner.fail(error)
  }

  webpack(webpackProConfig, (err, stats) => {
    spinner.stop()
    if (err) {
      return spinner.fail(err)
    }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
      progress: true,
    }))

    spinner.stopAndPersist({
      symbol: '😁',
      text: 'Build complete.\n',
    })

    console.log(chalk.cyan('😆 Build is done.\n'))
  })
})
