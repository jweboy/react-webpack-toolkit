import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import {
  Link,
} from 'react-router-dom'

import goodsPic from 'assets/goods.png'

import styles from './index.scss'


@CSSModules(styles)
class ItemCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isReady: true,
      renderCount: 1,
    }
  }
  render() {
    const {
      title,
      description,
      price,
      index,
      // uniqueId,
    } = this.props

    return (
      <li styleName={index % 2 !== 0 ? "goods__singular" : "goods__even"}>
        <Link to="/detail">
          <div styleName="goods__wrapper">
            <div styleName="goods__itemHeader" >
              <img styleName="goods__itemLogo" src={goodsPic} alt="" />
            </div>
            <div styleName="goods__desc" >{description}</div>
            <div styleName="goods__tagWraper">
              <span styleName="goods__tag">毕业季特惠</span>
            </div>
            <h5 styleName="goods___title">{title}</h5>
            <div styleName="goods__price">
              <span>¥</span>
              <span>{price}</span>
            </div>
          </div>
        </Link>
      </li>
    )
  }
}

ItemCard.propTypes = {
  // uniqueId: PropTypes.string.isRequired,
  // once: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default ItemCard