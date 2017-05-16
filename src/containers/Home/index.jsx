import React from 'react';
import PropTypes from 'prop-types';

// import Card from 'components/Card';
import TabBar from 'components/TabBar';
import LazyLoadList from 'components/LazyLoadList';
import 'styles/reset.scss';

const HomePage = props => (
  <div>
    {/* <Card />*/}
    <LazyLoadList />
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
