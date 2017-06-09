import React from 'react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import App from 'containers/App';

const RouteContainer = () => (
    <Router basename="/">
        <App />
    </Router>
);

export default RouteContainer;