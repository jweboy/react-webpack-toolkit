import React from 'react';

import Card from 'components/Card';
import List from 'components/List';
import TabBar from 'components/TabBar';
import {
  Route
} from 'react-router-dom';

import 'assets/styles/reset.css';

const Home = () => (
  <div>
    <Route path="/card" component={Card} />
    <Route path="/list" component={List} />
    <TabBar />
  </div>
);

export default Home;
