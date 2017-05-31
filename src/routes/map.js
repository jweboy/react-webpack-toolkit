import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import HomePage from 'containers/Home';
import SortPage from 'containers/Sort';
import ShopCart from 'containers/ShopCart';
// import PersonCenterPage from 'containers/PersonCenter';
import NotMatch from 'containers/NotMatch';
import Login from 'containers/Login';

// TODO 理解Switch, exact的作用

const RouteMap = () => (
  <Switch>
    <Route exact path="/" render={() => (<Redirect to="/home" />)} />
    <Route path="/home" component={HomePage} />
    <Route path="/sort" component={SortPage} />
    <Route path="/shopcart" component={ShopCart} />
    <Route path="/personcenter" component={Login} />
    <Route path="*" component={NotMatch} />
  </Switch>
);

export default RouteMap;