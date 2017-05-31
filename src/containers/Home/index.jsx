import React from 'react';
import PropTypes from 'prop-types';

import TabBar from 'components/TabBar';
import ScrollList from 'components/ScrollList';

// import Swipe from 'widgets/Swipe';

import 'styles/reset.scss';

const HomePage = props => (
  <div>
    {/* <Card />*/}
    {/* <Swipe />*/}
    <ScrollList />
    <TabBar currTab={props.currTab} />
  </div>
);

HomePage.defaultProps = {
  currTab: 'homeTab',
};
HomePage.propTypes = {
  currTab: PropTypes.string.isRequired,
};

export default HomePage;
