import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TabBar from 'components/TabBar';

class SortPage extends Component {
  static defaultProps = {
    currTab: 'sortTab',
  }

  static propTypes = {
    currTab: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div>
        SortPage
        <TabBar {...this.props} />
      </div>
    );
  }
}

export default SortPage;