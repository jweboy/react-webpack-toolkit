import React from 'react';
import PropTypes from 'prop-types';

import TabBar from 'components/TabBar';

const PersonCenter = (props) => (
  <div>
    PersonCenter
    <TabBar currTab={props.currTab} />
  </div>
);

PersonCenter.defaultProps = {
  currTab: 'centerTab'
}
PersonCenter.propTypes = {
  currTab: PropTypes.string.isRequired
}

export default PersonCenter;