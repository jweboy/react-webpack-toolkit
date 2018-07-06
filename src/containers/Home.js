import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { TestType } from '../components';

class Home extends Component {
	componentDidMount() {
		// eslint-disable-next-line
		console.log('home page~~.');
	}
	render() {
		return (
			<div>
				<span>Home..p;;;.</span>
				<TestType compiler="TypeScript" framework="React" />
			</div>
		);
	}
}

// eslint-disable-next-line
export default hot(module)(Home);