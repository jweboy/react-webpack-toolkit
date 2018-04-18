import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import TabBar from 'components/TabBar'
import Button from 'widgets/Button'
import { routeBtn } from 'hoc'

import styles from './index.scss'

const RouteBtn = routeBtn(Button, '/personcenter')

@CSSModules(styles)
class ShopCart extends Component {
  static propTypes = {
    currTab: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
  }
  handleClick = () => {

  }
  render() {
    const {
      history,
    } = this.props

    return (
      <div>
        <div styleName="header">
          <span styleName="logo">购物车</span>
          <span styleName="right">编辑</span>
        </div>
        <ul styleName="service_policy">
          <li styleName="item">
            <span>30天无忧退货</span>
          </li>
          <li styleName="item">
            <span>48小时快速退款</span>
          </li>
          <li styleName="item">
            <span>满88元免邮费</span>
          </li>
        </ul>
        <div styleName="noCart">
          <div styleName="noCart__text">
            去添加点什么吧～
          </div>
          <div styleName="noCart__btn">
            <RouteBtn history={history} />
          </div>
        </div>
        <TabBar {...this.props} />
      </div>
    )
  }
}

ShopCart.defaultProps = {
  currTab: 'shopTab',
  noCartBtnText: '登陆',
  noCartBtnIsActice: true,
}
// ShopCart.propsTypes = {
//   currTab: PropTypes.string.isRequired,
//   noCartBtnText: PropTypes.string.isRequired,
//   noCartBtnIsActice: PropTypes.bool.isRequired,
// }

export default ShopCart