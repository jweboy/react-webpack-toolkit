import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './index.scss'

const Toastr = ({ text, enter, leave }) => (
  <div className={classnames({
    [`${styles.toastr}`]: true,
    [`${styles.enterActive}`]: enter,
    [`${styles.leaveActive}`]: leave,
  })}>
    <span className={styles.text}>{text}</span>
  </div>
)

Toastr.defaultProps = {
  text: '提示内容',
  enter: false,
  leave: false,
}

Toastr.propTypes = {
  text: PropTypes.string,
  enter: PropTypes.bool.isRequired,
  leave: PropTypes.bool.isRequired,
}

export default Toastr