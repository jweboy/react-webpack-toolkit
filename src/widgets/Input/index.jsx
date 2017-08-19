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
      value: '',
      clearVisible: false,
    }
  }
  checkEmptyValue = () => (this.state.value === '')
  checkFormatValue = () => (this.state.value.trim())
  handleChange = (e) => {
    const { target: { value, name } } = e

    if (this.props.mapPropsToFields) {
      this.props.mapPropsToFields({
        [name]: this.checkFormatValue(value),
      });
    }
    this.setState({ value, clearVisible: true });
  }
  // TODO 清除按钮事件会同时出发onBlur事件，需要解决方案
  handleClear = () => {
    console.warn('clear');
    // this.setState({
    //   value: '23',
    //   // clearVisible: false,
    // })
  }
  handleOnFocus = () => {
    console.warn('focus');
    this.setState({ clearVisible: true });
  }
  handleOnBlur = () => {
    console.warn('blur');
    this.setState({ clearVisible: false });
  }
  render() {
    const { type, name, placeholder } = this.props
    const { value, clearVisible } = this.state

    // console.info(value, clearVisible)
    return (
      <div >
        <div styleName="box">
          <input
            styleName="input"
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={this.handleChange}
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
          />
          <i styleName={clearVisible ? "clear" : "hidden"} onClick={this.handleClear}>
            <FaClose />
          </i>
        </div>
        <div styleName="line">{''}</div>
      </div>
    )
  }
}

Input.defaultProps = {
  type: 'text',
  name: 'input',
  placeholder: '请输入相关内容',
  mapPropsToFields: () => { },
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  mapPropsToFields: PropTypes.func.isRequired,
}

export default Input