import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SideLeft from './SideLeft'
import SideRight from './SideRight'
import styles from './index.scss'

@CSSModules(styles)
class SortMenu extends Component {
  render() {
    const {
      list,
    } = this.props

    console.log(this.props)
    return (
      <div styleName="sortMenu">
        <SideLeft data={list} />
        <SideRight />
      </div>
    )
  }
}
SortMenu.propTypes = {
  list: PropTypes.array.isRequied,
}

export default connect(state => ({
  id: state.id,
}))(SortMenu)