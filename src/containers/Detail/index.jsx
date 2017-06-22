import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import PropTypes from 'prop-types'

import TopBar from 'components/TopBar'
import CartTab from 'components/CartTab'
import Swipe from 'widgets/Swipe'
import fetchRequest from 'util/fetch'

import styles from './index.scss'

@CSSModules(styles)
class Detail extends Component {
  state = {
    swipe: [],
  }
  componentDidMount() {
    this.getRequestData()
  }
  getRequestData = () => {
    fetchRequest('/mock/detail')
      .then((res) => {
        console.log(res)
        this.setState({
          swipe: res.banner,
        })
      })
  }
  render() {
    const {
      swipeConfig,
    } = this.props

    const {
      swipe,
    } = this.state
    return (
      <div>
        <TopBar />
        <div styleName="main">
          <Swipe data={swipe} {...swipeConfig} />
        </div>
        <CartTab />
      </div>
    );
  }
}

Detail.defaultProps = {
  swipeConfig: {
    dots: false,
  },
}
Detail.propTypes = {
  swipeConfig: PropTypes.object.isRequired,
}

export default Detail