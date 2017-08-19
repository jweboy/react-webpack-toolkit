import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { setLogin } from 'redux/form/login'
import { TabBar, TopBar, Toastr } from 'components'
import { Button, Input } from 'widgets'
import fetchRequest from 'util/fetch'
import styles from './index.scss'

@connect(() => ({}), { setLogin })
@CSSModules(styles)
class Login extends Component {
  state = {
    form: {},
    btnActive: false,
    showErrMsg: false,
  }
  getInputValue = (obj) => {
    console.info(obj);
    const key = Object.keys(obj).length
    this.setState(({ form }) => ({
      form: Object.assign(form, obj),
      btnActive: key > 0,
    }))
  }
  handleLogin = () => {
    const { form } = this.state
    const keys = Object.keys(form)
    let showError = null
    if (keys.length < 2) {
      showError = true
      this.setState({ showErrMsg: showError })
      return
    }
    if (keys.length === 2) {
      showError = false
      this.setState({ showErrMsg: showError })

      fetchRequest('/api/login', 'POST', form)
        .then(((res) => {
          // console.log(res, this.props)
          this.props.setLogin(res)
        }))
    }
  }
  render() {
    const { currTab, username, password, button } = this.props
    const { form, btnActive, showErrMsg } = this.state;

    return (
      <div styleName="login">
        <TopBar />
        <form action="" styleName="form">
          <Input {...username} mapPropsToFields={this.getInputValue} />
          <Input {...password} mapPropsToFields={this.getInputValue} />
          <Button
            {...button}
            onClick={this.handleLogin}
            active={btnActive}
          />
          <div styleName="unlogin">
            <a href="#" styleName="register">注册账号</a>
            <a href="#" styleName="forgetpwd">忘记密码</a>
          </div>
          <TabBar currTab={currTab} />
        </form>
        <Toastr enter={showErrMsg} leave={!showErrMsg} />
      </div>
    )
  }
}
Login.defaultProps = {
  currTab: 'centerTab',
  username: {
    type: 'text',
    name: 'username',
    placeholder: '请输入账号',
  },
  password: {
    type: 'password',
    name: 'password',
    placeholder: '请输入密码',
  },
  button: {
    text: '登陆',
  },
  setLogin: () => { },
}
Login.propTypes = {
  currTab: PropTypes.string.isRequired,
  username: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired,
  button: PropTypes.object.isRequired,
  setLogin: PropTypes.func.isRequired,
}

export default connect()(Login)