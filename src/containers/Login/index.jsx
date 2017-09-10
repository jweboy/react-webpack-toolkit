import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import { setLogin } from 'redux/form/login'
import { TabBar, TopBar } from 'components'
import fetchRequest from 'util/fetch'

const styles = {
  root: {
    height: '100%',
  },
  main: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    padding: '0 20px',
  },
  item: {
    marginBottom: 10,
  },
  btn: {
    marginTop: 20,
    float: 'right',
  },
}

@connect(() => ({}), { setLogin })
@withStyles(styles)
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
        console.warn(this.props);
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
      classes,
      currTab,
      username,
      password,
      headerTitle,
      button: { text, ...otherProps },
    } = this.props
    const {
      form,
      error: { usernameError, passwordError },
    } = this.state;

    return (
      <div className={classes.root}>
        <TopBar title={headerTitle} />
        <div className={classes.main}>
          <form action="">
            <TextField
              {...username}
              error={usernameError}
              onBlur={this.handleInputBlur}
              className={classes.item}
            />
            <TextField
              {...password}
              error={passwordError}
              onBlur={this.handleInputBlur}
              className={classes.item}
            />
            <div className={classes.btn}>
              <Button
                {...otherProps}
                onClick={this.handleBtnLogin}
              >{text}</Button>
            </div>
            {/* <div>
              <a href="#">注册账号</a>
              <a href="#">忘记密码</a>
            </div> */}
          </form>
        </div>
        <TabBar currTab={currTab} />
      </div>
    )
  }
}
Login.defaultProps = {
  currTab: 'centerTab',
  headerTitle: '测试项目',
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
  history: PropTypes.object,
  classes: PropTypes.object,
}

export default Login