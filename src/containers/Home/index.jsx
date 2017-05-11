import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/Card';
import TabBar from 'components/TabBar';
import 'styles/reset.scss';

const HomePage = (props) => (
  <div>
    <Card />
    <TabBar currTab={props.currTab}/>
  </div>
);

HomePage.defaultProps = {
  currTab: 'homeTab'
}
HomePage.propTypes = {
  currTab: PropTypes.string.isRequired
}

export default HomePage;
