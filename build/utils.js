const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('../config')

const resolvePath = dir => (path.join(__dirname, '..', dir))

const assetsPath = (_path) => {
  const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
    config.build.assetsSubDirectory :
    config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

const styleLoader = {
  loader: 'style-loader',
}

const cssLoaders = [{
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    importLoaders: 1,
    localIdentName: "[path][local]__[hash:base64:6]",
  },
}, {
  loader: 'postcss-loader',
}]

const generateLoaders = (options = {}) => {
  const loaderRules = {
    test: /\.scss?$/,
  }
  if (options.exact) {
    loaderRules.use = ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: cssLoaders,
    })
    return loaderRules
  }
  cssLoaders.unshift(styleLoader)
  loaderRules.use = cssLoaders
  return loaderRules
}

const charsAry = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const getRandomNum = (n) => {
  let res = ''

  for (let i = 0; i < n; i += 1) {
    const num = Math.ceil(Math.random() * 35)
    res += charsAry[num]
  }
  return res
}

const getLocalTime = () => {
  const newDate = new Date()
  const timeString = newDate.toLocaleTimeString().split(':').join('')
  const timer = {
    year: `${newDate.getFullYear()}`,
    month: newDate.getMonth() < 10 ? `0${newDate.getMonth()}` : newDate.getMonth(),
    date: newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate(),
    timeStr: timeString.substr(0, timeString.length - 2).trim(),
  }

  console.log(timer)
  return timer
}

const setDistPath = () => {
  let randomStr = ''
  const timeObj = getLocalTime()
  for (const key in timeObj) {
    if (Object.prototype.hasOwnProperty.call(timeObj, key)) {
      randomStr += timeObj[key]
    }
  }
  return randomStr + getRandomNum(6)
}

module.exports = {
  assetsPath,
  setDistPath,
  resolvePath,
  generateLoaders,
}
