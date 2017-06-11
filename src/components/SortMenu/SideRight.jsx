import React, { Component, } from 'react'
import CSSModules from 'react-css-modules'
import {
  Link,
} from 'react-router-dom'

import thumbnails from 'assets/thumbnails.png'
import styles from './index.scss'


@CSSModules(styles)
class SideRight extends Component {
  render() {
    return (
      <div styleName="sideRight">
        <div styleName="rightBanner">
          <div styleName="rightBanner__desc">爱，囿于厨房</div>
        </div>
        <div styleName="rightHeader">
          <span styleName="rightHeader__text">
            <span>居家</span>
            <span>分类</span>
          </span>
        </div>
        <ul styleName="rightList">
          {
            Array(...(Array(18))).map((item, index) => (
              <li styleName="rightList__item" key={index}>
                <Link to="/detail">
                  <img styleName="rightList__thumbnails" src={thumbnails} alt="" />
                  <div styleName="rightList__name">锅具</div>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default SideRight