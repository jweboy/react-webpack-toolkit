import React, { Component, } from 'react';
import PropTypes from 'prop-types'

import TabBar from 'components/TabBar'
import ScrollList from 'components/ScrollList'
import NoEditableSearch from 'widgets/NoEditableSearch'
import fetchRequest from 'util/fetch'

import 'styles/reset.scss'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      goodsList: [],
      loading: true,
    }
  }
  componentDidMount() {
    const {
      loading,
    } = this.state

    fetchRequest('/home')
      .then((res) => {
        this.setState({
          goodsList: res.goodsList,
          loading: !loading,
        })
      })
  }
  render() {
    const {
      currTab,
    } = this.props

    const {
      goodsList,
      loading,
    } = this.state

    return (
      <div>
        <NoEditableSearch {...this.props} />
        {loading ? <div>loading</div> : <ScrollList list={goodsList} />}
        <TabBar currTab={currTab} />
      </div>
    )
  }
}

HomePage.defaultProps = {
  currTab: 'homeTab',
}
HomePage.propTypes = {
  currTab: PropTypes.string.isRequired,
}

export default HomePage
