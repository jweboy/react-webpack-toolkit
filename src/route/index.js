import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
// const history = createHistory();

import App from 'containers/App';
import Detail from 'containers/Detail';
import Home from 'containers/Home';




const RouteContainer = () => (
    <Router basename="/">
        <div>
            <Route path="/" component={Home} />
            <Route path="/detail" component={Detail} />
        </div>
    </Router>
);

export default RouteContainer;