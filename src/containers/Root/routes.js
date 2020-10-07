import Start from 'pages/Start';
import Game from 'pages/Game';
import FinishGame from 'pages/FinishGame';
import History from 'pages/History';
import Instruction from 'pages/Instruction';

const routes = [
  {
    exact: true,
    component: Start,
    path: '/',
  },
  {
    component: Game,
    path: '/game',
  },
  {
    component: FinishGame,
    path: '/finish-game',
  },
  {
    component: History,
    path: '/history',
  },
  {
    component: Instruction,
    path: '/instruction',
  },
];

export default routes;
