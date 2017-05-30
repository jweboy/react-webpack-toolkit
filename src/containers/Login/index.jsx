import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import TabBar from 'components/TabBar';
import Button from 'widgets/Button';
import Input from 'widgets/Input';
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
        <form action="" styleName="form">
          <Input {...username} />
          <Input {...password} />
          <Button {...button} />
          <p styleName="unlogin">
            <a href="#" styleName="register">注册账号</a>
            <a href="#" styleName="forgetpwd">忘记密码</a>
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