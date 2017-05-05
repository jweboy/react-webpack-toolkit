import React from 'react';
import {
  render
} from 'react-dom';
import { 
  AppContainer
} from 'react-hot-loader';
import Redbox from 'redbox-react';
import PropsTypes from 'prop-types';

import App from './route';

// 获取装载组件的根节点
const mountNode = document.getElementById('root');

// 定义根组件渲染的函数
const rootRender = (Component) => {
  render(
    <AppContainer errorReporter={Redbox}>
      <Component />
    </AppContainer>,
    mountNode
  );
};

const _isDev = process.env.NODE_ENV === 'development' ? 1 : 0;

rootRender(App);

// 模块热更新 Hot Module Replacement API
if (module.hot) {
  if(_isDev) {
    const RedBox = require('redbox-react').default;
    try {
      rootRender(App);
    } catch(error) {
      render(
        <RedBox error={error} />,
        mountNode
      );
    } 
  } else {
    rootRender(App);
  }
  module.hot.accept('./route', () => {
    rootRender(App);
  });
}
// TODO redbox待完善
