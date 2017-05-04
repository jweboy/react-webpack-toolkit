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
import PropsTypes from 'prop-types';

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

// 定义redbox
const ErrorReporter = ({error}) => {
  console.warn(error);
  return <Redbox error={error} />;
}
ErrorReporter.propTypes = {
  error: React.PropTypes.instanceOf(Error).isRequired
}

rootRender(App);

// 模块热更新 Hot Module Replacement API
if (module.hot) {
  // const reRenderApp = (App) => {
  //   try {
  //     rootRender(App);
  //   } catch(error) {
  //     rootRender(App, ErrorReporter);
  //   }
  // }
  module.hot.accept('./route', () => {
    const NextApp = require('./route').default;
    rootRender(NextApp, ErrorReporter);
    // setImmediate(() => {
    //   // Preventing the hot reloading error from react-router
    //   unmountComponentAtNode(mountNode),
    //   reRenderApp(App);
    // });
  });
}
// TODO redbox待完善
