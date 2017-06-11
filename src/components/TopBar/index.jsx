import React, { Component, } from 'react'
import CSSModules from 'react-css-modules'
import FaAlignJustify from 'react-icons/lib/fa/align-justify'
import FaSearch from 'react-icons/lib/fa/search'
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart'
import FaClose from 'react-icons/lib/fa/close'

import styles from './index.scss'

@CSSModules(styles)
class TopBar extends Component {
  render() {
    return (
      <nav styleName="topBar">
        <div styleName="header">
          <div>
            <FaAlignJustify />
            <FaClose styleName="hidden" />
          </div>
          <div styleName="name">精选商城</div>
          <div styleName="right">
            <FaSearch />
            <FaShoppingCart />
          </div>
        </div>
        <div styleName="menu">
          <ul styleName="list">
            <li styleName="item">
              <FaSearch />
              <span styleName="text">首页</span>
            </li>
            <li styleName="item">
              <FaSearch />
              <span styleName="text">专题</span>
            </li>
            <li styleName="item">
              <FaSearch />
              <span styleName="text">分类</span>
            </li>
            <li styleName="item">
              <FaSearch />
              <span styleName="text">个人</span>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default TopBar