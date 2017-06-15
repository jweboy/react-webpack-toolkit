import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import styles from './index.scss'

@CSSModules(styles)
class Loading extends Component {
  render() {
    return (
      <div styleName="spinner">
        <div styleName="dot1" />
        <div styleName="dot2" />
      </div>
    );
  }
}

export default Loading;