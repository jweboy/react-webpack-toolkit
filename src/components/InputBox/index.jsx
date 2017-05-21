import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

const InputBox = (props) => {
  console.log(props);
  const {
    type,
    name,
    placeholder,
  } = props;

  return (
    <div className={styles.inputBox}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <div className={styles.line} />
    </div>
  );
};
InputBox.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default InputBox;