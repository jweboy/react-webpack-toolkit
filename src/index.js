import React from 'react';
import {
  render
} from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './containers/Root';

const rootRender = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

rootRender(Root);

// 模块热更新
if (module.hot) {
    module.hot.accept('./containers/Root', () => {
       rootRender(Root);
    });
}
