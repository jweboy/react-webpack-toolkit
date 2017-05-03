import React from 'react';
import {
  HashRouter as Router
} from 'react-router-dom';

import routes from './data';
import SubRoute from './route';

const route = () => (
  <Router basename="/">
    <div>
      {/*<Route path="/" render={Home}></Route>
            <Route path="list" render={List}></Route>
            <Route path="card" render={Card}></Route>*/}
      {
        routes.map((route, i) => (
          <SubRoute key={i} route={route} />
        ))
      }
    </div>
  </Router>
);

export default route;