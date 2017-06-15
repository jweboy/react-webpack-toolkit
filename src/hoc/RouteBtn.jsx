import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default function RouteBtn(WrappedComponent, pathname) {
  return class extends Component {
    static displayName = 'RouteBtn'
    static defaultProps = {
      text: '登陆',
      isActive: true,
    }
    static propTypes = {
      history: PropTypes.object.isRequired,
    }
    constructor(props) {
      super(props)

      this.state = {}
    }
    handleClick = () => {
      const {
        history,
      } = this.props

      history.push(pathname)
    }
    render() {
      return <WrappedComponent handleClickRoute={this.handleClick} {...this.props} />
    }
  }
}
