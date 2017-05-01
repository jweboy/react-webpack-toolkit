const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const px2rem = require('postcss-pxtorem');

const config = require('../config');

const px2remOpts = {
    rootValue: 16
};
const resolve = (dir) => (path.join(__dirname, '..', dir));

const srcPath = resolve('src');
const nodeModulesPath = resolve('node_modules');
const imgPath = resolve('./src/assets/imgs');

module.exports = {
    entry: [
        './src/index' // 入口文件
    ],
    output: { // 编译输出
        publicPath: '/', // TODO 搞明白publicPath 区分环境
        path: config.build.assetsRoot, //输出目录
        filename: 'bundle.[hash].js' //编译后的文件名
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], //后缀扩展名补全
        modules: [
            nodeModulesPath,
            srcPath
        ],
        /**
         * 全局路径别名
         * import '../../styles/test.css' => import 'styles/test.css'
         * 别名只能在 .js .jsx文件使用
         */
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            api: path.resolve(__dirname, 'src/api'),
            views: path.resolve(__dirname, 'src/views'),
            mock: path.resolve(__dirname, 'src/mock'),
            assets: path.resolve(__dirname, 'src/assets'),
            containers: path.resolve(__dirname, 'src/containers'),
            util: path.resolve(__dirname, 'src/util')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
                include: srcPath
            },
            {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ],
                exclude: nodeModulesPath,
                include: srcPath
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/,
                include: imgPath,
                use: 'url-loader?limit=10240&name=assets/imgs/[name]-[hash:8].[ext]' // 图片小于10K 转换为base64编码
            }, {
                test: /\.(eot|svg|ttf|woff|woff2).*$/,
                use: 'url-loader?name=[name]-[hash:8].[ext]'
            }, {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: [
                            'last 3 version',
                            'ie >= 10'
                        ]
                    }),
                    px2rem(px2remOpts)
                ],
                context: srcPath
            }
        })
    ]
};
