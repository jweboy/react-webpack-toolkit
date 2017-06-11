import React, { Component, } from 'react'
import CSSModules from 'react-css-modules'

import SideLeft from './SideLeft'
import SideRight from './SideRight'
import styles from './index.scss'

@CSSModules(styles)
class SortMenu extends Component {
  render() {
    return (
      <div styleName="sortMenu">
        <SideLeft />
        <SideRight />
      </div>
    )
  }
}

export default SortMenu