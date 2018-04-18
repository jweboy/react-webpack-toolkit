import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from "react-apollo";
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import logger from 'redux-logger'
// import { routerReducer, routerMiddleware } from 'react-router-redux'
// import thunk from 'redux-thunk'
// import createHistory from 'history/createBrowserHistory'

import ConsoleErrorReporter from 'widgets/Error'
import 'styles/reset.scss'

import App from './routes'
// import reducers from './redux/allReducers'

// 获取装载组件的根节点
const mountNode = document.getElementById('root')

// let finalCreateStore = null
// react-router 相关的中间件
// const history = createHistory()
// const middleware = routerMiddleware(history)

// const middlewares = [routerMiddleware, logger]

// if (window.devToolsExtension) {
//   finalCreateStore = compose(
//     applyMiddleware(...middlewares),
//     window.devToolsExtension(),
//   )(createStore)
// } else {
//   finalCreateStore = compose(applyMiddleware(...middlewares)(createStore))
// }

// const store = finalCreateStore(reducers)

// const store = createStore(
//   combineReducers({
//     ...reducers,
//     router: routerReducer,
//   }),
//   compose(
//     applyMiddleware(...middlewares, thunk),
//     // 开启 redux devtool
//     window.devToolsExtension &&
//     window.devToolsExtension()
//   )
// )

const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
})

// 定义根组件渲染的函数
const rootRender = (Component) => {
  render(
    <AppContainer errorReporter={ConsoleErrorReporter}>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>  
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
