import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class Home extends Component {
	componentDidMount() {
		// eslint-disable-next-line
		console.log('home page~~.');
	}
	render() {
		return (
			<div>Home..p;;;.</div>
		);
	}
}

// eslint-disable-next-line
export default hot(module)(Home);