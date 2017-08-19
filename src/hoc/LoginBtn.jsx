import React, { Component } from 'react'

// import fetchRequest from 'util/fetch'

export default function loginBtn(WrappedComponent) {
  return class extends Component {
    static displayName = 'loginBtn'

    static defaultProps = {
      text: '登陆',
    }
    handleLogin = () => {
      // const { loginForm } = this.props;
      // fetchRequest('/api/login', 'POST', loginForm)
      //   .then(((res) => {
      //     console.log(res)
      //   }))
    }
    render() {
      return (
        <WrappedComponent handleClickLogin={this.handleLogin} {...this.props} />
      );
    }
  }
}  
