const eslintFriendlyFormatter = require('eslint-friendly-formatter')
const autoprefixer = require('autoprefixer');
const config = require('../config');
const {
  resolvePath,
  assetsPath,
} = require('./utils');

const srcPath = resolvePath('src');
const nodeModulesPath = resolvePath('node_modules');
const testPath = resolvePath('test');
const imgPath = resolvePath('./src/assets');

console.log('base:', process.env.NODE_ENV)

module.exports = {
  entry: [
    './src/index', // 入口文件
  ],
  output: { // 编译输出
    publicPath: process.env.NODE_ENV === 'production' ?
      config.build.assetsPublicPath : config.dev.assetsPublicPath, // TODO 搞明白publicPath 区分环境
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
    },
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: nodeModulesPath,
        include: [srcPath, testPath],
      },
      {
        test: /\.js[x]$/,
        enforce: 'pre',
        use: [{
          loader: 'eslint-loader',
          options: {
            fix: true,
            formatter: eslintFriendlyFormatter,
          },
        }],
        exclude: nodeModulesPath,
        include: [srcPath, testPath],
      },
      {
        test: /\.scss?$/,
        use: [{
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              root: srcPath,
              modules: true,
              sourceMap: true,
              localIdentName: "[path][local]__[hash:base64:6]",
            },
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer(),
              ],
            },
            // options: {
            //     parser: 'postcss-scss',
            //     plugins: [
            //         autoprefixer({
            //             browsers: [
            //                 'last 3 version',
            //                 'ie >= 10'
            //             ]
            //         }),
            //         px2rem(px2remOpts)
            //     ]
            // }
          },
        ],
      },
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
        }, ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 10000,
            name: assetsPath('fonts/[name]__[hash:8].[ext]'),
          },
        }],
      },
    ],
  },
};
