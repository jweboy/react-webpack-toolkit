import React from 'react'
import PropTypes from 'prop-types'
import {
  Link,
} from 'react-router-dom'

import placeholder from 'util/placeholder'
import styles from './index.scss'

const SliderItem = ({
  url,
}) => (<Link to="/detail"><img src={url || placeholder} className={styles.item} /></Link>)

SliderItem.propTypes = {
  url: PropTypes.string.isRequired,
}

export default SliderItem