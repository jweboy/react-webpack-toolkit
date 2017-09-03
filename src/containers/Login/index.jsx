import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { setLogin } from 'redux/form/login'
import { TabBar, TopBar } from 'components'
// import { Button, Input } from 'widgets'
import fetchRequest from 'util/fetch'
import styles from './index.scss'

@connect(() => ({}), { setLogin })
@CSSModules(styles)
class Login extends Component {
  state = {
    form: {
      username: '',
      password: '',
    },
    error: {
      usernameError: false,
      passwordError: false,
    },
  }
  /* eslint no-continue: 0 */
  checkLoginError() {
    const { form } = this.state
    const error = {}
    for (const key in form) {
      if (!form[key]) {
        Object.assign(error, { [`${key}Error`]: true });
        continue;
      }
    }
    return error;
  }
  handleBtnLogin = () => {
    const error = this.checkLoginError()
    if (error && Object.keys(error).length) {
      this.setState({ error })
      return;
    }
    fetchRequest('/api/login', 'POST', this.state.form)
      .then(((res) => {
        this.props.history.push('/home')
        this.props.setLogin(res)
      }))
  }
  handleInputBlur = (e) => {
    const { target: { name, value } } = e
    this.setState(({ form }) => ({
      form: Object.assign(form, { [name]: value }),
      error: { [`${name}Error`]: !value },
    }))
  }
  render() {
    const {
      currTab,
      username,
      password,
      button: { text, ...otherProps },
    } = this.props
    const {
      form,
      error: { usernameError, passwordError },
    } = this.state;

    return (
      <div styleName="login">
        <TopBar />
        <form action="" styleName="form">
          <TextField error={usernameError} {...username} onBlur={this.handleInputBlur} />
          <TextField error={passwordError} {...password} onBlur={this.handleInputBlur} />
          <div styleName="loginBtn">
            <Button {...otherProps} onClick={this.handleBtnLogin}>{text}</Button>
          </div>
          <div styleName="unlogin">
            <a href="#" styleName="register">注册账号</a>
            <a href="#" styleName="forgetpwd">忘记密码</a>
          </div>
          <TabBar currTab={currTab} />
        </form>
      </div>
    )
  }
}
Login.defaultProps = {
  currTab: 'centerTab',
  username: {
    label: '账号',
    placeholder: '请输入账号',
    fullWidth: true,
    type: 'text',
    name: 'username',
  },
  password: {
    label: '密码',
    placeholder: '请输入密码',
    fullWidth: true,
    type: 'password',
    name: 'password',
  },
  button: {
    text: '登陆',
    color: 'primary',
    raised: true,
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

export default Login