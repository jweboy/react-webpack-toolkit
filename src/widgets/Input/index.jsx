import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './index.scss';

@CSSModules(styles)
class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const {
      type,
      name,
      placeholder,
    } = this.props;

    return (
      <div>
        <div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
          />
        </div>
        <div styleName="line">{''}</div>
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;