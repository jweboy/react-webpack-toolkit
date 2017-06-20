import React, { Component } from 'react'

import fetchRequest from 'util/fetch'

export default function loginBtn(WrappedComponent) {
  return class extends Component {
    static displayName = 'loginBtn'

    static defaultProps = {
      text: '登陆',
    }
    handleLogin = () => {
      console.log('login')
      fetchRequest('/api/login', 'POST', {
        username: 'jweboy',
        password: 'test',
      })
        .then(((res) => {
          console.log(res)
        }))
    }
    render() {
      return (
        <WrappedComponent handleClickLogin={this.handleLogin} {...this.props} />
      );
    }
  }
}  
