# 可考虑的功能

1. 无需重启webpack即可实现模块的自动安装
  参考地址[https://sourcegraph.com/github.com/facebook/create-react-app/-/blob/packages/react-scripts/config/webpack.config.dev.js#L363]
2. 自动打开浏览器改用插件方式,如果已经打开则只刷新不打开新的
  参考地址 [https://sourcegraph.com/github.com/facebook/create-react-app/-/blob/packages/react-dev-utils/openBrowser.js#L43:10]

3. index.html相关插件的变量注入
  参考地址[https://sourcegraph.com/github.com/facebook/create-react-app/-/blob/packages/react-dev-utils/InterpolateHtmlPlugin.js]

# TODO

- 线上打包的autoprefixer补全配置
- 开发环境进程的logger需要动态化增加体验
- scss配置还没加，考虑增加postcss兼容scss和less
- file配置没加上，需要老版本迁移
- 线上打包部分的代码拆分（webpack4废除了CommonsChunkPlugin改用splitChunks）


## webpack优化参考

- [https://jeffjade.com/2017/08/12/125-webpack-package-optimization-for-speed](https://jeffjade.com/2017/08/12/125-webpack-package-optimization-for-speed)
