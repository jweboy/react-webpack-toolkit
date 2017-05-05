import React from 'react';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Card from 'components/Card';
import TabBar from 'components/TabBar';
import 'assets/styles/reset.scss';

const Home = () => (
  <div>
    <Card />
    <TabBar />
  </div>
);

export default Home;
