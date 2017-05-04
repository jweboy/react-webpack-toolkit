import React from 'react';

import Card from 'components/Card';
import List from 'components/List';
import TabBar from 'components/TabBar';
import Route from 'components/Route';

import 'assets/styles/reset.css';

const Home = () => (
  <div>
    <Route /> 
    <TabBar />
  </div>
);

export default Home;
