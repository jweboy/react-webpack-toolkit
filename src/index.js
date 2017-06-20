import React from 'react'
import {
  render,
} from 'react-dom'
import {
  AppContainer,
} from 'react-hot-loader'
import {
  Provider,
} from 'react-redux'
// import {
//   syncHistoryWithStore,
// } from 'react-router-redux'

import ConsoleErrorReporter from 'widgets/Error'
import 'styles/reset.scss'

import App from './routes'
import store from './store'

// 获取装载组件的根节点
const mountNode = document.getElementById('root')

// 定义根组件渲染的函数
const rootRender = (Component) => {
  render(
    <AppContainer errorReporter={ConsoleErrorReporter}>
      <Provider store={store}>
        <Component />
      </Provider>
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
