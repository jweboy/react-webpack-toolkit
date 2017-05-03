import React, { 
    Component
} from 'react';
import { 
    render
} from 'react-dom';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import Card from 'components/Card';
import List from 'components/List';
import 'containers/Root';

const route = (
    <BrowserRouter path="/">
        <Route path="card" component={Card}></Route>
        <Route path="list" component={List}></Route>
    </BrowserRouter>
);

export default route;