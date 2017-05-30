import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './index.scss';

@CSSModules(styles, {
  allowMultiple: true,
})
class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  render() {
    const {
      text,
    } = this.props;
    return (
      <div styleName={''}>
        <a styleName={"btn"}>{text}</a>
      </div >
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;