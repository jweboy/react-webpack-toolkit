import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer, setConfig } from 'react-hot-loader';
import App from './todo-debug';

setConfig({
	logLevel: 'debug'
});

ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>,
	document.getElementById('root')
);
