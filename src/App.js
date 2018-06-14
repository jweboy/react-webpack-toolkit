import React, { Component } from 'react';
import { Button } from 'antd';

class App extends Component {
	componentDidMount() {
		console.log('ok---~~~~', API_URL);
	}
  render() {
    console.log('render ~~');
		return (
			<div className="app">
				<h2>react webpack boilerplate test</h2>	
				<span>test classname</span>
				<Button type="primary">test antd</Button>
			</div>
		);
	}
}

export default App;