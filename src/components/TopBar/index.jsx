import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import {
  Link,
} from 'react-router-dom'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import FaAlignJustify from 'react-icons/lib/fa/align-justify'
import FaSearch from 'react-icons/lib/fa/search'
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart'
import FaClose from 'react-icons/lib/fa/close'

import styles from './index.scss'

const topBarList = [
  {
    path: '/home',
    icon: <FaSearch />,
    text: '首页',
  }, {
    path: '',
    icon: <FaSearch />,
    text: '专题',
  }, {
    path: '/sort',
    icon: <FaSearch />,
    text: '分类',
  }, {
    path: '/personcenter',
    icon: <FaSearch />,
    text: '个人',
  }
]

const topBarItem = topBarList.map(item => (
  <li key={shortid.generate()}>
    <Link to={item.path} styleName="item">
      {item.icon}
      <span styleName="text">{item.text}</span>
    </Link>
  </li>
))

@CSSModules(styles, {
  allowMultiple: true,
})
class TopBar extends Component {
  static defaultProps = {
    title: '精选商城',
  }
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
    }

    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }
  handleToggleMenu = () => {
    const {
      isShow,
    } = this.state

    this.setState({
      isShow: !isShow,
    })
  }
  render() {
    const {
      title,
    } = this.props

    const {
      isShow,
    } = this.state

    return (
      <nav styleName="topBar">
        <div styleName="header">
          <div onClick={this.handleToggleMenu}>
            <FaAlignJustify
              styleName={isShow ? "hidden" : ""}
            />
            <FaClose
              styleName={isShow ? "" : "hidden"}
            />
          </div>
          <div styleName="name">{title}</div>
          <div styleName="right">
            <Link to="search">
              <FaSearch />
            </Link>
            <Link to="/shopcart">
              <FaShoppingCart />
            </Link>
          </div>
        </div>
        <div styleName={isShow ? "menu" : "hidden"}>
          <ul styleName="list">
            {topBarItem}
          </ul>
        </div>
      </nav>
    )
  }
}

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default TopBar