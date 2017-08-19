const path = require('path')
// const eslintFriendlyFormatter = require('eslint-friendly-formatter')
const config = require('../config')
const {
  resolvePath,
  assetsPath,
} = require('./utils')

const rootPath = path.join(__dirname, '../')
const srcPath = resolvePath('src')
const nodeModulesPath = resolvePath('node_modules')
const testPath = resolvePath('./src/test')
const imgPath = resolvePath('./src/assets')


module.exports = {
  context: rootPath,
  entry: [
    './src/index', // 入口文件
  ],
  output: { // 编译输出
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath, // 输出目录 dev -> '/' build -> './'
    path: config.build.assetsRoot, // 输出目录
    filename: '[name].js', // 编译后的文件名
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 后缀扩展名补全
    modules: [
      nodeModulesPath,
      srcPath,
    ],
    /**
     * 全局路径别名
     * import '../../styles/test.css' => import 'styles/test.css'
     * 别名只能在 .js .jsx文件使用
     */
    alias: {
      components: resolvePath('src/components'),
      styles: resolvePath('src/styles'),
      assets: resolvePath('src/assets'),
      containers: resolvePath('src/containers'),
      util: resolvePath('src/util'),
      routes: resolvePath('src/routes'),
      widget: resolvePath('src/widget'),
      nodeModules: nodeModulesPath,
    },
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: nodeModulesPath,
      include: [srcPath, testPath],
    },
    // {
    //   test: /\.js[x]$/,
    //   enforce: 'pre',
    //   use: [{
    //     loader: 'eslint-loader',
    //     options: {
    //       fix: true,
    //       formatter: eslintFriendlyFormatter,
    //     },
    //   }],
    //   exclude: nodeModulesPath,
    //   include: [srcPath, testPath],
    //   },
    {
      test: /\.(jpe?g|png|gif|svg|ico)(\?.*)?$/,
      include: imgPath,
      exclude: nodeModulesPath,
      use: [{
        loader: 'file-loader',
        options: {
          limit: 10240,
          name: assetsPath('img/[name]__[sha512:hash:base64:7].[ext]'),
        },
      }],
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name]__[hash:8].[ext]'),
        },
      }],
    }],
  },
}
