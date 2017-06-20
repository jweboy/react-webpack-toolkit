import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import TabBar from 'components/TabBar'
import ScrollList from 'components/ScrollList'
import NoEditableSearch from 'widgets/NoEditableSearch'
import Loading from 'widgets/LoadingStretch'
import fetchRequest from 'util/fetch'
import Swipe from 'widgets/Swipe'
// import transition from 'util/transition'

import styles from './index.scss'

@CSSModules(styles)
class HomePage extends Component {
  constructor() {
    super()

    this.state = {
      goods: [],
      banner: [],
      loading: true,
    }
  }
  componentDidMount() {
    const {
      loading,
    } = this.state

    fetchRequest('/mock/home')
      .then((res) => {
        this.setState({
          goods: res.goods,
          loading: !loading,
          banner: res.banner,
        })
      })
  }
  render() {
    const {
      currTab,
    } = this.props

    const {
      goods,
      loading,
      banner,
    } = this.state

    // const {
    //   fade,
    // } = transition

    return (
      <div styleName="container">
        <NoEditableSearch {...this.props} />
        <Swipe data={banner} />
        {
          loading ?
            <div styleName="loading">
              <Loading />
            </div> :
            <ScrollList list={goods} />
        }
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
