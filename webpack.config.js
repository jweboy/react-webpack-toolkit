var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var px2rem = require('postcss-pxtorem');

var px2remOpts = {
    rootValue: 16
};

module.exports = {
    entry: [
        './src/index' // 打包入口文件
    ],
    output: {
        publicPath: '/', //编译好的文件，静态资源引用路径
        path: path.resolve(__dirname, 'release'), //默认编译到src开发目录
        filename: 'bundle.js' //编译后的文件名称
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'], //后缀扩展名补全
        /**
         * 全局路径别名
         * import '../../styles/test.css' => import 'styles/test.css'
         * 别名只能在 .js .jsx文件使用
         */
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            api: path.resolve(__dirname, 'src/api'),
            views: path.resolve(__dirname, 'src/views'),
            // mock:path.resolve(__dirname, 'src/mock'),
            assets: path.resolve(__dirname, 'src/assets'),
            containers: path.resolve(__dirname, 'src/containers'),
            util: path.resolve(__dirname, 'src/util')
        }
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel',
            exclude: /^node_modules$/,
            include: path.resolve(__dirname, 'src')
        }, {
            test: /\.(jpe?g|png|gif|svg|ico)$/,
            loader: 'url?limit=10240&name=assets/imgs/[name].[ext]?[hash:8]' // 图片小于10K 转换为base64编码
        }, {
            test: /\.(eot|svg|ttf|woff|woff2).*$/,
            loader: 'url?name=[name].[ext]?[hash:8]'
        }, {
            test: /\.css?$/,
            loader: 'style!css!postcss'
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    },
    postcss: function() {
        return [autoprefixer, px2rem(px2remOpts)];
    },
    plugins: [

    ]
};
