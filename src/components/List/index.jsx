import React, {
  Component
} from 'react';
// import api from 'api';
import axios from 'axios';

import data from 'mock/data';

import ajax from 'util';

import styles from './index.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);


class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      msg: {
        a: 1
      }
    };

    this.handleClick = this.handleClick.bind(this);

  }
  componentDidMount() {
    this.getUserIfo();
  }
  getUserIfo() {
    this.setState({
      user: data.user
    });
  }
  handleClick() {
    axios.get('/api/data')
      .then(function (response) {
        if(response.status === 200) {
          console.dir(response);
        }
      });
  }
  render() {
    const { user, msg } = this.state;

    let status = user.isShow === 1 ? 'Processs' : 'Er00ro00r';
    let btnClass = cx({
      error: !user.isShow,
      success: user.isShow,
      primary: true
    });
    return (
      <div>
        <h1>JSON:</h1>
        <p>{user.name}10</p>
        <p>{user.age}</p>
        <p>{user.hobby}</p>
        <button className={btnClass} onClick={this.handleClick}>{status}</button>
        <p>{msg.user}{msg.age}</p>
      </div>
    );
  }
}
export default List;
