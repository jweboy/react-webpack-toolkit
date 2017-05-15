import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import HomePage from 'containers/Home';
import SortPage from 'containers/Sort';
import ShopCardPage from 'containers/ShopCard';
import PersonCenterPage from 'containers/PersonCenter';
import NotMatch from 'containers/NotMatch';

// TODO 理解Switch, exact的作用

const RouteMap = () => (
  <Switch>
    <Route exact path="/" render={() => (<Redirect to="/home" />)} />
    <Route path="/home" component={HomePage} />
    <Route path="/sort" component={SortPage} />
    <Route path="/shopcard" component={ShopCardPage} />
    <Route path="/personcenter" component={PersonCenterPage} />
    <Route path="*" component={NotMatch} />
  </Switch>
);

export default RouteMap;