import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import MdSearch from 'react-icons/lib/md/search';

import styles from './index.scss';

@CSSModules(styles)
class NoEditableSearch extends Component {
  render() {
    return (
      <div styleName="wraper">
        <div styleName="search">
          <MdSearch />
          <span>
            <span>商品搜索,共</span>
            <span>77</span>
            <span>款好物</span>
          </span>
        </div>
      </div>
    );
  }
}

export default NoEditableSearch;