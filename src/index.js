import React from 'react';
import {
  render
} from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Route from './route';

const rootRender = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

rootRender(Route);

// 模块热更新
if (module.hot) {
    module.hot.accept('./containers/Root', () => {
       rootRender(Route);
    });
}
