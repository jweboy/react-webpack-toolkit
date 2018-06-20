import React from 'react';
import { render } from 'react-dom';
import { hot, AppContainer, 
// setConfig
} from 'react-hot-loader';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// import 'styles/reset.scss'

import App from './App';

// setConfig({ logLevel: 'debug' });

// 获取装载组件的根节点
const mountNode = document.getElementById('root');

const client = new ApolloClient({
	uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
});

// 定义根组件渲染的函数
const rootRender = (Component) => {
	render(
		<ApolloProvider client={client}>
			<AppContainer>
				<Component />
			</AppContainer>
		</ApolloProvider>,  
		mountNode,
	);
};

/* eslint-disable */
hot(module)(rootRender(App));

// FIXME: react-hot-loader@latest不需要这个判断了
// if (module.hot) {
//   module.hot.accept('./routes', () => {
//     rootRender(App)
//   })
// }
