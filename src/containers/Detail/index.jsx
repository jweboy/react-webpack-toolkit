import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import TopBar from 'components/TopBar'
import CartTab from 'components/CartTab'

import styles from './index.scss'

@CSSModules(styles)
class Detail extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <div styleName="main">
          <CartTab />
        </div>
      </div>
    );
  }
}

export default Detail