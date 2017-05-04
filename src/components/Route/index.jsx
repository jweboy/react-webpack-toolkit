import React, {
    Component
} from 'react';
import {
    Redirect,
    Switch,
    Route
} from 'react-router-dom';

import Card from 'components/Card';
import List from 'components/List';
import Home from 'containers/Home';
import NotFound from 'containers/NotFoundPage';

const routes = [
    {
        path: '/',
        component: Home
    }, {
        path: '/card',
        component: Card
    }, {
        path: '/list',
        component: List
    }, {
        path: '/404',
        component: NotFound
    }
];

class SubRoute extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            route
        } = this.props;
        return (
            <Route
                path={route.path}
                render={() => (
                    <route.component />
                )}
            />
        );
    }
}

const route = () => (
    <div>
        <Switch>
            <Redirect to="/" />
        </Switch>
        <Route exact path="/" component={Card} />
        <Route path="/card" component={Card} />
        <Route path="/list" component={List} />
    </div>
);

// TODO 理解Switch, exact的作用

export default route;