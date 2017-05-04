import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';

import App from 'containers/App';
import Detail from 'containers/Detail';
import List from 'components/List';
// const history = createHistory();

const RouteContainer = () => (
    <Router basename="/" >
        <div>
            <App />
            <Route path="/detail" component={List} />
        </div>
    </Router>
);

export default RouteContainer;