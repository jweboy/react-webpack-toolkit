import React from 'react'
import PropTypes from 'prop-types'
import {
  Link,
} from 'react-router-dom'

import goodsPic from 'assets/goods.png'

import styles from './index.scss'

const ItemCard = ({ title, description, price, index }) => (
  <li className={index % 2 !== 0 ? styles.singular : styles.even}>
    <Link to="/detail">
      <div className={styles.wrapper}>
        <div className={styles.header} >
          <img className={styles.logo} src={goodsPic} alt="" />
        </div>
        <div className={styles.desc} >{description}</div>
        <div className={styles.tagWraper}>
          <span className={styles.tag}>毕业季特惠</span>
        </div>
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.price}>
          <span>¥</span>
          <span>{price}</span>
        </div>
      </div>
    </Link>
  </li>
)

ItemCard.propTypes = {
  index: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default ItemCard