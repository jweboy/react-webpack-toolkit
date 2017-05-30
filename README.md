# react webpack2 react-router4 es6/es7 项目模板

## 集成测试
[![Build Status](https://travis-ci.org/jweboy/react-webpack-biolerplate.svg?branch=feature)](https://travis-ci.org/jweboy/react-webpack-biolerplate)

## 代办事项
- 调整react-router的页面组织架构 (I) - ok
- 解决router4 + react-hot-loader结合页面热更新失效问题 (I) - ok
- 解决相同路由触发的警告问题 (II)
> Hash history cannot PUSH the same path; a new entry will not be added to the history stack
- 添加css预处理器,stylus或者postcss,模块化加载css(II) - ok
- react-hot-loader 在css改变时不生效问题 - ok
- px to rem 问题 - ok
- TabBar 组件默认状态未添加 - ok
- TabBar 组件将接收到props转变为可变的state - ok
- react-hot-loader 参考官方更改细致 - ok


## 问题
- redux-devtools-log-monitor -- redux log工具
- react-css-modules 不支持css嵌套？
- extract-text-webpack-plugin 应用于生产环境 开发环境 react-hot-loader不会刷新css
- 1rem = 15px
- TabBar组件中在路由模块根路径重定向到homePage解决默认状态问题
- TabBar组件中每次接收到的props是每个不同组件页面默认的props, 无需在componentWillReceiveProps中转变为当前组件的可变state。


