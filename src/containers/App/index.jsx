import React, { Component } from 'react';
import {
    render
} from 'react-dom';

import Home from 'containers/Home';
import Route from 'components/Route';

const App = () =>(
    <div>
        <Route />
        <Home />
    </div>
);

export default App;