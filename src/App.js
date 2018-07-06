import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Button } from 'antd';
// import nodejs from './assets/nodejs.png'
import nodejs from './assets/nodejs.png';
// import jsLogo from './assets/js-logo.svg';
import jsGif from './assets/js.gif';
import nodejsDay from './assets/nodejsDay.jpg';
import { Test, TestDir, TestLess } from './components';
import './App.less';

/* eslint-disable */
class App extends Component {
	displayName = App
	UNSAFE_componentWillMount() {
		console.warn('will mount!!~~');
	}
	componentDidMount() {
		console.log('ok', API_URL);
	}
	render() {
		console.log('render！~~');
		return (
			<div className="app">
				<h2>react webpack boilerplate test</h2>	
				<span>test classname</span>
				<Button type="primary">test antd</Button>
				<hr />
				<h3>测试 file-loader</h3>
				local-picture-png: <img src={nodejs} width="20%" alt="nodejs" />
				{/* local-picture-svg: <img src={jsLogo} width="20%" alt="jsLogo" /> */}
				local-picture-gif: <img src={jsGif} width="20%" alt="jsGif" />
				local-picture-jpg: <img src={nodejsDay} width="20%" alt="nodejsDay" />
				web-picture: <img src="https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/nodejs-frameworks.png" width="30%" alt="nodejs" />
				<hr />
				<div>
					<h3>测试icon</h3>
					<i className="iconfont icon-lianjie" style={{ fontSize: 24 }}></i>
					<i className="iconfont icon-iconfont5" style={{ fontSize: 24 }}></i>
					<i className="iconfont icon-gouwuche" style={{ fontSize: 24 }}></i>
					<i className="iconfont icon-gouwuchetianjia" style={{ fontSize: 24 }}></i>
					<i className="iconfont icon-cuowu" style={{ fontSize: 24 }}></i>
					<i className="iconfont icon-erweima" style={{ fontSize: 24 }}></i>
					<i className="iconfont icon-jushoucang" style={{ fontSize: 24 }}></i>
					<i className="iconfont icon-lajixiang" style={{ fontSize: 24 }}></i>
				</div>
				<Test />
				<TestDir />
				<TestLess />
			</div>
		);
	}
}

export default hot(module)(App);