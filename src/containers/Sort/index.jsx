import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TabBar from 'components/TabBar';

class SortPage extends Component {
  render() {
    const {
      currTab
    } = this.props;
    return (
      <div>
        SortPage
        <TabBar currTab={currTab}/>
      </div>
    );
  }
}

SortPage.defaultProps = {
  currTab: 'sortTab'
}
SortPage.propTypes = {
  currTab: PropTypes.string.isRequired
}


export default SortPage;