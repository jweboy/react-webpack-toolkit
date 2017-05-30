import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import TabBar from 'components/TabBar';
import InputBox from 'components/InputBox';
import Button from 'widgets/Button';
import styles from './index.scss';

@CSSModules(styles)
class Login extends Component {
  render() {
    const {
      currTab,
      username,
      password,
      button,
    } = this.props;
    return (
      <div styleName="login">
        <form action="" styleName="loginForm">
          <InputBox {...username} />
          <InputBox {...password} />
          <Button {...button} />
          <p>
            <a>注册账号</a>
            <a href="#">忘记密码</a>
          </p>
          <TabBar currTab={currTab} />
        </form>
      </div>
    );
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
};
Login.propTypes = {
  currTab: PropTypes.string.isRequired,
  username: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired,
  button: PropTypes.object.isRequired,
};

export default Login;