import React, {
  Component,
} from 'react';
// import api from 'api';
import axios from 'axios';

import data from 'mock/data';
import classNames from 'classnames/bind';
import TabBar from 'components/TabBar';

import styles from './index.scss';

const cx = classNames.bind(styles);

class List extends Component {
  static handleClick() {
    axios.get('/api/data')
      .then((response) => {
        if (response.status === 200) {
          console.dir(response);
        }
      });
    // axios.get('/users')
    //   .then(function (response) {
    //     if (response.status === 200) {
    //       console.dir(response);
    //     }
    //   });
  }
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      msg: {
        a: 1,
      },
    };
  }
  componentDidMount() {
    this.getUserIfo();
  }
  getUserIfo() {
    this.setState({
      user: data.user,
    });
  }
  render() {
    const { user, msg } = this.state;

    const status = user.isShow === 1 ? 'Processs' : 'Er00ro00r';
    const btnClass = cx({
      error: !user.isShow,
      success: user.isShow,
      primary: true,
    });
    return (
      <div>
        <h1>JSON:</h1>
        <p>{user.name}10</p>
        <p>{user.age}</p>
        <p>{user.hobby}</p>
        <button className={btnClass} onClick={this.handleClick}>{status}</button>
        <p>{msg.user}{msg.age}</p>
        <TabBar />
      </div>
    );
  }
}
export default List;
