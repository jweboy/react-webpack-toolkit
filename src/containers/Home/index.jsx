import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { Query, graphql } from 'react-apollo'
import gql from 'graphql-tag'

import TabBar from 'components/TabBar'
import ScrollList from 'components/ScrollList'
import NoEditableSearch from 'widgets/NoEditableSearch'
import Loading from 'widgets/LoadingStretch'
import fetchRequest from 'util/fetch'
import Swipe from 'widgets/Swipe'
// import transition from 'util/transition'

import styles from './index.scss'

const RATEDATA = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`
@graphql(RATEDATA)  
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
  // componentDidMount() {
  //   fetch('mock/api')
  //     .then(res => res.json())
  //     .then(res => { 
  //       console.log(res);
  //     })
  // }
  render() {
    // const {
    //   currTab,
    //   swipeConfig,
    // } = this.props

    // const {
    //   goods,
    // } = this.state
    // const {
    //   fade,
    // } = transition
    const { data } = this.props;
    return (
      <div styleName="container">
        {data.loading && <p>Loading...</p>} 
        {data.error && <p>Error...</p>} 
        {data.rates && data.rates.map(({ rate, currency }) => (
          <li key={currency}>{currency}:{rate}</li>
        ))}
      </div>
    )
  }
}

// HomePage.defaultProps = {
//   currTab: 'homeTab',
//   swipeConfig: {
//     dots: true,
//   },
// }
// HomePage.propTypes = {
//   currTab: PropTypes.string.isRequired,
//   swipeConfig: PropTypes.object.isRequired,
// }

export default HomePage
