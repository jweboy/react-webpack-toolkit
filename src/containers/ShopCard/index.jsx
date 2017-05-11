import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TabBar from 'components/TabBar';

class ShopCardPage extends Component {
  render() {
    return (
      <div>
        ShopCardPage
        <TabBar {...this.props} />
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