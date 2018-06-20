// import {
// 	createStore,
// 	compose,
// 	combineReducers,
// } from 'redux';
// import { routerReducer } from 'react-router-redux';

// import DevTools from 'containers/DevTools';
// import env from 'util/env';

// import reducers from './reducers';

// console.log(env);

// const finalCreateStore = compose(
// 	// applyMiddleware(...)
// 	DevTools.instrument() // middleware存在异步，放在之后确保actions都在store中
// )(createStore);
// const store = finalCreateStore(combineReducers({
// 	...reducers,
// 	routing: routerReducer,
// }));

// export default store;
