import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'

import ConsoleErrorReporter from 'widgets/Error'
import 'styles/reset.scss'

import App from './routes'
import reducers from './redux/allReducers'

// 获取装载组件的根节点
const mountNode = document.getElementById('root')

let finalCreateStore = null
const middlewares = [logger]

if (window.devToolsExtension) {
  finalCreateStore = compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension(),
  )(createStore)
} else {
  finalCreateStore = compose(applyMiddleware(...middlewares)(createStore))
}

const store = finalCreateStore(reducers)

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
