import React from 'react';
import {
  render,
  unmountComponentAtNode 
} from 'react-dom';
import { 
  AppContainer
} from 'react-hot-loader';
import {
  Redbox
} from 'redbox-react';
import App from './route';

// 获取装载组件的根节点
const mountNode = document.getElementById('root');

// 定义根组件渲染的函数
const rootRender = (Component, RedBox) => {
  render(
    <AppContainer errorReporter={RedBox ? RedBox : ''}>
      <Component />
    </AppContainer>,
    mountNode
  );
};

rootRender(App);

// 模块热更新
if (module.hot) {
  const reRenderApp = () => {
    try {
      rootRender(App);
    } catch(error) {
      rootRender(App, Redbox);
    }
  }

  module.hot.accept('./route', () => {
    setImmediate(() => {
      // Preventing the hot reloading error from react-router
      unmountComponentAtNode(mountNode),
      rootRender(App);
    });
  });
}
