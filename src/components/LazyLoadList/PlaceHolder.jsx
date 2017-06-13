import React, { Component, } from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

// import loading from 'assets/loading.gif'
import Loading from 'widgets/Loading'

import styles from './index.scss'

@CSSModules(styles)
class PlaceHolder extends Component {

  render() {
    const {
      description,
      price,
      title,
      index,
    } = this.props
    return (
      <li styleName={index % 2 !== 0 ? "goods__singular" : "goods__even"}>
        <div styleName="goods__wrapper">
          <div styleName="goods__itemHeader" >
            {/* <img styleName="goods__itemLogo" src={loading} alt="" />*/}
            <div>
              <Loading />
            </div>
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
      </li>
    )
  }
}

PlaceHolder.propTypes = {
  index: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default PlaceHolder