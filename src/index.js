import React from 'react'
import {
  render,
} from 'react-dom'
import {
  AppContainer,
} from 'react-hot-loader'
import Redbox from 'redbox-react'

import App from './routes'
// import _DEV_ from 'util/env'
// console.log(_DEV_)

// 获取装载组件的根节点
const mountNode = document.getElementById('root')

// 定义根组件渲染的函数
const rootRender = (Component) => {
  render(<
    AppContainer errorReporter = {
      Redbox
    } >
    <
    Component / >
    <
    /AppContainer>,
    mountNode,
  )
}

rootRender(App)

// 模块热更新 Hot Module Replacement API
if (module.hot) {
  // if(_DEV_) {
  //   const RedBox = require('redbox-react').default
  //   try {
  //     rootRender(App)
  //   } catch(error) {
  //     render(
  //       <RedBox error={error} />,
  //       mountNode
  //     )
  //   } 
  // } else {
  //   rootRender(App)
  // }
  module.hot.accept('./routes', () => {
    rootRender(App)
  })
}
// TODO redbox待完善
