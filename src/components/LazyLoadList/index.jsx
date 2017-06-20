import React, { Component } from 'react'
import Proptypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import CSSModules from 'react-css-modules'

import ItemCard from './ItemCard'
import PlaceHolder from './PlaceHolder'
import styles from './index.scss'

@CSSModules(styles)
class LazyLoadList extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      list: nextProps.list,
    })
  }

  render() {
    const {
      list,
    } = this.props

    return (
      <ul styleName="list">
        {list.map((item, index) => (
          <LazyLoad
            {...this.props}
            key={item.id}
            placeholder={
              <PlaceHolder
                index={index + 1}
                {...item}
              />
            }
          >
            <ItemCard
              {...item}
              index={index + 1}
            />
          </LazyLoad>
        ))}
      </ul>
    )
  }
}

LazyLoadList.defaultProps = {
  height: 200,
  offset: [-200, 0],
  debounce: 200,
}

LazyLoadList.propTypes = {
  list: Proptypes.array.isRequired,
}

export default LazyLoadList