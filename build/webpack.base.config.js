const path = require('path');
const webpack = require('webpack');

const config = require('../config');

const resolve = (dir) => (path.join(__dirname, '..', dir));

const srcPath = resolve('src');
const nodeModulesPath = resolve('node_modules');
const imgPath = resolve('./src/assets');
const assetsPath = 'assets/';

module.exports = {
    entry: [
        './src/index' // 入口文件
    ],
    // entry: {
    //     vendor: [
    //         'react',
    //         'react-dom'
    //     ],
    //     app: './src/index'
    // },
    output: { // 编译输出
        publicPath: '/', // TODO 搞明白publicPath 区分环境
        path: config.build.assetsRoot, //输出目录
        filename: '[name].js' //编译后的文件名
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
            'components': resolve('src/components'),
            'api': resolve('src/api'),
            'styles': resolve('src/styles'),
            'mock': resolve('./mock'),
            'assets': resolve('src/assets'),
            'containers': resolve('src/containers'),
            'util': resolve('src/util'),
            'routes': resolve('src/routes')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: nodeModulesPath,
                include: srcPath
            },
            // {
            //     test: /\.scss?$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: [
            //             {
            //                 loader: 'css-loader',
            //                 options: {
            //                     modules: true,
            //                     localIdentName: "[path][name]__[local]--[hash:base64:6]"
            //                 }
            //             }, {
            //                 loader: 'postcss-loader',
            //                 options: {
            //                     parser: 'postcss-scss'
            //                 }
            //             }
            //         ]
            //     })
            // },
            {
                test: /\.scss?$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: "[name]__[local]--[hash:base64:6]"
                        }
                    }, {
                        loader: 'postcss-loader'
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
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/,
                include: imgPath,
                exclude: nodeModulesPath,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            limit: 10240,
                            name: `${assetsPath}` + '[name]__[sha512:hash:base64:7].[ext]'
                        }
                    }
                ]
            }, {
                test: /\.(eot|svg|ttf|woff|woff2).*$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]__[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};
