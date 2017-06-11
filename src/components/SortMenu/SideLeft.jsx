import React, { Component, } from 'react'
import CSSModules from 'react-css-modules'

import styles from './index.scss'


@CSSModules(styles)
class SideLeft extends Component {
  render() {
    return (
      <div styleName="sideLeft">
        <ul styleName="leftList">
          {
            Array(...(Array(15))).map((item, index) => (
              <li styleName="leftItem" key={index}>
                推荐
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default SideLeft