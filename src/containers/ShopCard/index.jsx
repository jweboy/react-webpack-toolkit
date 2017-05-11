import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TabBar from 'components/TabBar';

class ShopCardPage extends Component {
  render() {
    const {
      currTab
    } = this.props;
    return (
      <div>
        ShopCardPage
        <TabBar currTab={currTab}/>
      </div>
    );
  }
}

ShopCardPage.defaultProps = {
  currTab: 'shopTab'
}
ShopCardPage.propsTypes = {
  currTab: PropTypes.string.isRequired
}

export default ShopCardPage;