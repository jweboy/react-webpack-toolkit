import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import FaClose from 'react-icons/lib/fa/close'
import styles from './index.scss'

@CSSModules(styles, {
  allowMultiple: true,
})
class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isShow: false,
      value: '',
    }
  }
  handleChange = (e) => {
    const value = e.target.value
    const {
      isShow,
    } = this.state

    if (value.trim() !== '') {
      this.setState({
        isShow: !isShow,
        value,
      })
    }
  }
  handleClear = () => {
    const {
      isShow,
    } = this.state

    this.setState({
      value: '',
      isShow: !isShow,
    })
  }
  render() {
    // console.log(this.props)
    const {
      type,
      name,
      placeholder,
    } = this.props

    const {
      isShow,
      value,
    } = this.state

    return (
      <div>
        <div styleName="box">
          <input
            styleName="input"
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={this.handleChange}
          />
          <i styleName={isShow ? "clear" : "hidden"} onClick={this.handleClear}>
            <FaClose />
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