import React, { Component, } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import MdSearch from 'react-icons/lib/md/search'

import styles from './index.scss'

@CSSModules(styles)
class NoEditableSearch extends Component {
  constructor() {
    super()

    this.state = {

    }
  }
  handleClick = () => {
    const {
      history,
    } = this.props

    history.push('/search')
  }
  render() {
    return (
      <div styleName="wraper">
        <div styleName="search" onClick={this.handleClick}>
          <MdSearch />
          <span>
            <span>商品搜索,共</span>
            <span>77</span>
            <span>款好物</span>
          </span>
        </div>
      </div>
    )
  }
}

NoEditableSearch.propTypes = {
  history: PropTypes.object.isRequired,
}

export default NoEditableSearch