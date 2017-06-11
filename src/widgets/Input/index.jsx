import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import FaAdjust from 'react-icons/lib/fa/adjust'

import styles from './index.scss'

@CSSModules(styles)
class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    console.log(this.props)
    const {
      type,
      name,
      placeholder,
    } = this.props

    return (
      <div>
        <div styleName="box">
          <input
            styleName="input"
            type={type}
            name={name}
            placeholder={placeholder}
          />
          <i styleName="clear">
            <FaAdjust />
          </i>
        </div>
        <div styleName="line">{''}</div>
      </div>
    )
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default Input