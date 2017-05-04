import React from 'react';
import {
  HashRouter as Router,
  Redirect
} from 'react-router-dom';

import routes from './data';
import SubRoute from './route';

const route = () => (
  <Router basename="/">
    <div>
      <Redirect push to="/card"/>
      {
        routes.map((route, i) => (
          <SubRoute key={i} route={route} />
        ))
      }
    </div>
  </Router>
);

export default route;