import React from 'react';
import {
    Redirect,
    Switch,
    Route
} from 'react-router-dom';

import Card from 'components/Card';
import List from 'components/List';
import Home from 'containers/Home';
import Detail from 'containers/Detail';
import NotMatch from 'containers/NotFoundPage';

// TODO 理解Switch, exact的作用

const RouteMap = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/card" component={Card} />
    <Route path="/list" component={List} />
    <Route path="*" component={NotMatch}/>
  </Switch>
);

export default RouteMap;