import Start from 'pages/Start';
import History from 'pages/History';
import Game from 'pages/Game';
import Instruction from 'pages/Instruction';

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
  },
  {
    component: Instruction,
    path: 'instruction',
  }
];

export default routes;
