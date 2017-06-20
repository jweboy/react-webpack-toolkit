import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import TabBar from 'components/TabBar'
import NOEditableSearch from 'widgets/NoEditableSearch'
import SortMenu from 'components/SortMenu'
import fetchRequest from 'util/fetch'

import styles from './index.scss'

@CSSModules(styles)
class SortPage extends Component {
  static defaultProps = {
    currTab: 'sortTab',
  }

  static propTypes = {
    currTab: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props)

    this.state = {
      menuList: [],
    }
  }
  componentDidMount() {
    fetchRequest('/mock/menu')
      .then((res) => {
        this.setState({
          menuList: res.menu,
        })
      })
  }
  render() {
    const {
      menuList,
    } = this.state
    return (
      <div styleName="sortWraper">
        <div styleName="sortHeader">
          <NOEditableSearch {...this.props} />
        </div>
        <SortMenu list={menuList} />
        <TabBar {...this.props} />
      </div>
    )
  }
}

export default SortPage