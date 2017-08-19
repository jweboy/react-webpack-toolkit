import React, {
  Component,
} from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import styles from './index.scss'

@CSSModules(styles, {
  allowMultiple: true,
})
class Button extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  shouldComponentUpdate = nextProps => nextProps.active !== this.props.active
  handleClick = (e) => {
    this.props.onClick(e);
  }
  render() {
    const { text, active } = this.props
    return (
      <div styleName={''} onClick={this.handleClick}>
        <a styleName={active ? "btn active" : "btn"}>{text}</a>
      </div >
    )
  }
}
Button.defaultProps = {
  text: '按钮文字',
  active: false,
  onClick: () => { },
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

export default Button