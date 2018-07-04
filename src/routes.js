import React from 'react';
import {
	Switch,
	Route,
	Redirect,
	HashRouter as Router,
} from 'react-router-dom';


import HomePage from 'containers/Home';
import CenterPage from 'containers/Center';

const supportsHistory = 'pushState' in window.history;

const AppRouter = () => (
	<Router
		basename="/"
		forceRefresh={!supportsHistory}
	>
		<Switch>
			<Route exact path="/" render={() => (<Redirect to="/home" />)} />
			<Route path="/home" component={HomePage} />
			<Route path="/center" component={CenterPage} />
		</Switch>
	</Router>
);

export default AppRouter;
