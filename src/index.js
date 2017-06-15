import React from 'react'
import {
  render,
} from 'react-dom'
import {
  AppContainer,
} from 'react-hot-loader'

import ConsoleErrorReporter from 'widgets/Error'
import App from './routes'

// 获取装载组件的根节点
const mountNode = document.getElementById('root')

// 定义根组件渲染的函数
const rootRender = (Component) => {
  render(
    <AppContainer errorReporter={ConsoleErrorReporter} >
      <Component />
    </AppContainer>,
    mountNode,
  )
}

rootRender(App)

// 模块热更新 Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => {
    rootRender(App)
  })
}
