import React, { Component, } from 'react'
import CSSModules from 'react-css-modules'

import LazyLoadList from 'components/LazyLoadList'

import styles from './index.scss'


@CSSModules(styles)
class ScrollList extends Component {
  render() {
    return (
      <div styleName="goods__floor">
        <h3 styleName="goods__title">志趣好物</h3>
        <LazyLoadList />
      </div>
    )
  }
}

export default ScrollList