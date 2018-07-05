# react-webpack-toolkit [![Build Status](https://travis-ci.org/jweboy/react-webpack-toolkit.svg?branch=version-upgrade)](https://travis-ci.org/jweboy/react-webpack-toolkit)

快速开发react技术栈的脚手架工具

## 快速开发

此脚手架可以通过[jweboy-cli](https://www.npmjs.com/package/jweboy-cli)工具快速创建开发。

``` js
npm install -g jweboy-cli
jweboy-cli init <project-name>
```

## todo事项

## 完成了
- 线上打包的autoprefixer补全配置
- 开发环境进程的logger需要动态化增加体验
- scss配置还没加，考虑增加postcss兼容scss和less
- file配置没加上，需要老版本迁移
- 线上打包部分的代码拆分（webpack4废除了CommonsChunkPlugin改用splitChunks）

## 杂项

[typescript config参数](https://www.tslang.cn/docs/handbook/compiler-options.html)
- moduleResolution 决定如何处理模块
- lib 编译过程中需要引入的库文件的列表
- forceConsistentCasingInFileNames 禁止对同一个文件的不一致的引用
- noImplicitReturns 不是函数的所有返回路径都有返回值时报错
- noImplicitThis 当 this表达式的值为 any类型的时候，生成一个错误
- noImplicitAny 在表达式和声明上有隐含的 any类型时报错
- strictNullChecks 在严格的 null检查模式下， null和 undefined值不包含在任何类型里，只允许用它们自己和 any来赋值（有个例外， undefined可以赋值到 void)
- suppressImplicitAnyIndexErrors 阻止 --noImplicitAny对缺少索引签名的索引对象报错。查看 issue #1232了解详情。
- noUnusedLocals 若有未使用的局部变量则抛错

## 计划
- 使用eslint还是tslint再决定

## 参考链接

- [webpack优化参考](https://jeffjade.com/2017/08/12/125-webpack-package-optimization-for-speed)
