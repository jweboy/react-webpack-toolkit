import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Button = props => (
  <div className={''}>
    <a className={'btn'}>{props.text}</a>
  </div>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;