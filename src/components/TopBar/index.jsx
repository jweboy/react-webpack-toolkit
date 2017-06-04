import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import FaAdjust from 'react-icons/lib/fa/adjust';

import styles from './index.scss';

@CSSModules(styles)
class TopBar extends Component {
  render() {
    return (
      <div styleName="topBar">
        <div styleName="header">
          <FaAdjust />
          <div styleName="name">XXshagcheng</div>
          <div styleName="right">
            <FaAdjust />
            <FaAdjust />
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;