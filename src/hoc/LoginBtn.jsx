import React, { Component } from 'react';

export default function loginBtn(WrappedComponent) {
  return class extends Component {
    static displayName = 'loginBtn'

    static defaultProps = {
      text: '登陆',
    }
    handleLogin = () => {
      console.log('login')
    }
    render() {
      return (
        <WrappedComponent handleClickLogin={this.handleLogin} {...this.props} />
      );
    }
  }
}  
