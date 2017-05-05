import React, { Component } from 'react';
import {
    render
} from 'react-dom';
import {
    Route
} from 'react-router-dom';

import Home from 'containers/Home';
import RouteMap from 'routes/map';
import TabBar from 'components/TabBar';

// import 'styles/test.scss';

const App = () =>(
    <RouteMap />
);

export default App;