import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

// import loading from 'assets/loading.gif'
import Loading from 'widgets/LoadingScale'

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
      <li styleName={index % 2 !== 0 ? "singular" : "even"}>
        <div styleName="wrapper">
          <div styleName="header" >
            {/* <img styleName="itemLogo" src={loading} alt="" />*/}
            <div>
              <Loading />
            </div>
          </div>
          <div styleName="desc" >{description}</div>
          <div styleName="tagWraper">
            <span styleName="tag">毕业季特惠</span>
          </div>
          <h5 styleName="title">{title}</h5>
          <div styleName="price">
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