import React, { Component } from 'react';
import { Button } from 'antd';
// import banner from './assets/logo.jpg'

// console.log(banner)

class App extends Component {
	componentDidMount() {
		console.log('ok---~~~~', API_URL);
	}
	render() {
		// console.log('render ~~');
		return (
			<div className="app">
				<h2>react webpack boilerplate test</h2>	
				<span>test classname</span>
				<Button type="primary">test antd</Button>
				<hr />
				<h3>测试file-loader</h3>
				local-image: <img src="./assets/nodejs.png" width="30%" alt="nodejs" />
				internal-image: <img src="https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/nodejs-frameworks.png" width="30%" alt="nodejs" />
			</div>
		);
	}
}

export default App;