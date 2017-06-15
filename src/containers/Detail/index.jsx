import React, { Component } from 'react'
import {
  RouteTransition,
} from 'react-router-transition'
import CSSModules from 'react-css-modules'

import transition from 'util/transition'
import TopBar from 'components/TopBar'

import styles from './index.scss'

const {
  slideLeft,
} = transition

@CSSModules(styles)
class Detail extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <RouteTransition
          pathname={location.pathname}
          {...slideLeft}
        >
          <div styleName="main">
            内容页部分
          </div>
        </RouteTransition>
      </div>
    );
  }
}

export default Detail