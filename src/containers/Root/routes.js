import Start from 'pages/Start';
import History from 'pages/History';
import Game from 'pages/Game';

const routes = [
  {
    exact: true,
    component: Start,
    path: '/',
  },
  {
    component: History,
    path: '/history',
  },
  {
    component: Game,
    path: '/game',
  }
];

export default routes;
