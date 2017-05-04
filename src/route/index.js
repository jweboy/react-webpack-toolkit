import React from 'react';
import {
  HashRouter as Router
} from 'react-router-dom';

import App from 'containers/App';

const Route = () => (
    <Router basename="/">
        <App />
    </Router>
);

export default Route;