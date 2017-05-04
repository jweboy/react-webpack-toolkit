import Card from 'components/Card';
import List from 'components/List';
import Home from 'views/Home';

export default [
  {
    path: '/',
    component: Home
  }, {
    path: '/card',
    component: Card
  }, {
    path: '/list',
    component: List
  }
];