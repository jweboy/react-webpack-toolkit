import React, { Component, } from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import LazyLoadList from 'components/LazyLoadList'

import styles from './index.scss'


@CSSModules(styles)
class ScrollList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [],
    }
  }
  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps)
  //   this.setState({
  //     list: nextProps.list,
  //   })
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // const {
  //   //   list,
  //   // } = this.state

  //   // return nextState.goodsList.gid !== goodsList.gid
  //   return false
  // }
  render() {
    const {
      list,
    } = this.props

    return (
      <div>
        {
          list.map(item => (
            <div styleName="goods__floor" key={item.gid}>
              <h3 styleName="goods__title">{item.name}</h3>
              <LazyLoadList list={item.list} />
            </div>
          ))
        }
      </div>
    )
  }
}

ScrollList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default ScrollList