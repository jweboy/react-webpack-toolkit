const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const webpack = require('webpack')
const HappyPack = require('happypack')

const paths = require('./paths')
const { apiUrl, experienceUrl } = require('../config')

const happyThreadPool = HappyPack.ThreadPool({
	size: 4
})
const happyThreads = 4
const imagePath = 'static/imgs/'

/**
 * 2.html-webpack-plugin-before-html-processing => 在生成index.html之前是否需要做动态插入操作，需要的话再加这个自定义插件
 *  参考地址 https://sourcegraph.com/github.com/facebook/create-react-app/-/blob/packages/react-dev-utils/InterpolateHtmlPlugin.js#L27
 * 
 */

module.exports = {
	target: 'web',
	context: paths.appPath,
	// 编译模式
	mode: process.env.NODE_ENV,
	entry: [
		// Promise、Fetch polyfill
		require.resolve('./polyfills'),
		// 入口文件
		paths.appIndexJs,
	],
	resolve: {
		// 自动解析文件后缀扩展名
		extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', '.mjs'],
		// 全局声明目录,绝对路径引用
		alias: {
			components: paths.appSrcComponents,
			util: paths.appSrcUtil
		},
		// 解析模块应该搜索的目录
		modules: [
			paths.appSrc,
			paths.apppNodeModules
		]
	},
	module: {
		rules: [
			// es6+语法、react语法解析loader
			{
				test: [/\.js(x)?$/, /\.mjs$/],
				exclude: /node_modules/,
				include: paths.appSrc,
				loader: 'happypack/loader?id=happyBabel',
			},
			// TODO: 增加react结合跟普通函数的验证
			{
				test: /\.ts(x)?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
				include: paths.appSrc
			},
			{
				test: /\.(png|jp(e)?g|gif)$/,
				exclude: /node_modules/,
				use: [{
						loader: 'file-loader',
						options: {
							name(file) {
								if (process.env.NODE_ENV === 'development') { 
									return '[name].[ext]'
								}
								return '[name]__[hash:6].[ext]'
							},
							limit: 10240, // 限制图片大小为10M以内
							// emitFile: false, // 不打包输出图片目录,一般用于图片全部托管于图床
							outputPath: imagePath // 图片输出路径,开发环境保存在虚拟内存中,即对应 dist/statis/imgs/目录
						}
				}]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: 'url-loader'
			}
		]
	},
	plugins: [
		// 模块路径匹配磁盘实际地址
		new CaseSensitivePathsPlugin(),
		// 全局变量声明
		new webpack.DefinePlugin({
			'API_URL': apiUrl,
			'Experience_URL': experienceUrl
		}),
		new HappyPack({
			id: 'happyBabel',
			// 源码编译生成的 Node虚拟模块的数量, 4个是最佳方案。
			threads: happyThreads,
			// 线程池大小
			threadPool: happyThreadPool,
			loaders: [{
				loader: 'babel-loader',
				options: {
					// 将转译结果缓存到文件系统, 文档说 babel-loader 提速至少两倍
					// 默认缓存目录 ./node_modules/.cache/babel-loader/
					cacheDirectory: true,
				}
			}],
		}),
	]
};
