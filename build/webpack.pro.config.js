process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const paths = require('./paths')
const baseWebpackConfig = require('./webpack.base.config')

module.exports = merge(baseWebpackConfig, {
  // 出现错误强制中断打包
  bail: true,
  // 不生成source-map,适合线上环境
  devtool: 'none',
  // 输出目录
	output: {
		// 在bundle中引入所包含模块信息的相关注释
		path: paths.appDist,
		// 文件保存在 WebpackDevServer 的虚拟内存中
		filename: 'static/js/[name].[chunkhash:8].js',
		// 文件代码拆分
		chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
		// 静态资源目录,一般指向 '/'
		// publicPath
  },
  module: {
    rules: [
      // 解析node_modules里的css文件
      {
        test: /\.css$/,
        include: paths.apppNodeModules,
        exclude: paths.appSrc,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      // 解析src项目里的less、scss文件
			{
				test: /\.(less|scss)$/,
				exclude: paths.apppNodeModules,
				include: paths.appSrc,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true, // 开启 CSS Modules
							sourceMap: true, // 开启 sourceMap
							camelCase: true, // 支持驼峰 .active-btn => activeBtn
							localIdentName: '[local]-[hash:base64:5]'
						}
					},
					{
						loader: 'postcss-loader',
					}
				]
			},
    ]
  },
  plugins: [
    // 打包css
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash:8].css',
      // chunkFilename: '[id].[hash].css'
    }),
    // 压缩css
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // 压缩js
    new UglifyJsPlugin({
      uglifyOptions: {
        parse: {
          // 可能会用到 => 解析ecma8的代码,但是不会影响compress和output,不会导致ecma5的代码产生错误
          ecma: 8
        },
        compress: {
          // 默认ecma5版本
          comparisons: false,
        },
        mangle: {
          // 解决safari10/11的await bug
          safari10: true
        },
        output: {
          // 默认ecma5版本
          // ascii字符转译
          ascii_only: true,
        }
      },
      // 多进程并行运行提升构建速度
      parallel: true,
      // 启用文件缓存
      cache: true,
    }),
    // 压缩html模版
    new HtmlWebpackPlugin({
      template: paths.appIndexHtml,
      title: 'creams',
      minify: {
        // 移除注释
        removeComments: true,
        // 移除内联中的空格
        collapseInlineTagWhitespace: true,
        // 移除旧规范中标签默认的一些属性名
        removeRedundantAttributes: true,
        // 采用H5兼容的doctype
        useShortDoctype: true,
        // 移除标签上的多余空属性
        removeEmptyAttributes: true,
        // 从style和link标签移除 type="text/css" 属性,其他属性不变
        removeStyleLinkTypeAttributes: true,
        // 保证单个标签元素的尾部斜线
        keepClosingSlash: true,
        // 压缩行内js
        minifyJS: true,
        // 压缩行内css
        minifyCSS: true,
        // 简化URL
        // 参考 https://github.com/stevenvachon/relateurl
        // minifyURLs: true,
      }
    }),
    // 打包之后文件的索引目录
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    // gzip压缩
    // new CompressionPlugin({
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    // })
    // bundle包体积分析
    // new BundleAnalyzerPlugin({
    //   openAnalyzer: false
    // })
  ],
})