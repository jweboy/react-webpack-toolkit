import React, { Component } from 'react';
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'

import styles from './index.scss'

@CSSModules(styles, {
  allowMultiple: true,
})
class CartTab extends Component {
  render() {
    const {
      list,
    } = this.props;
    return (
      <div styleName="tab">
        {
          list.map(item => (
            <button key={item.id} styleName={`btn ${item.class}`}>
              <span>{item.text}</span>
            </button>
          ))
        }
      </div>
    );
  }
}

CartTab.defaultProps = {
  list: [
    {
      id: 1,
      text: '客服',
      class: 'customer',
    }, {
      id: 2,
      text: '立即购买',
      class: 'buy',
    }, {
      id: 3,
      text: '加入购物车',
      class: 'cart',
    }
  ],
}

CartTab.propTypes = {
  list: PropTypes.array.isRequired,
}

export default CartTab;