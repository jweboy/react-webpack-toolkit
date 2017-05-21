import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

class Button extends Component {
  render() {
    const {
      text,
    } = this.props;
    return (
      <div className={styles.btnBox}>
        <a className={styles.btn}>{text}</a>
      </div>
    );
  }
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;