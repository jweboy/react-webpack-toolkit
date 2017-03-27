import axios from'axios';
import MockAdapter from'axios-mock-adapter';

let mockAxios = axios.create(),
	mock = new MockAdapter(mockAxios);

mock.onGet('/login').reply(200, require('./mock/login'));


export default mockAxios;
