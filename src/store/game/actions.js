import { START_GAME, STOP_GAME } from './constants';

export function startGame(nickname) {
  let number = '';
  const randNum = Math.floor(0 - 0.5 + Math.random() * (999 - 0 + 1)).toString();

  switch(randNum.length) {
    case 3:
      number = randNum;
      break;
    case 2:
      number = `0${randNum}`;
      break;
    default:
      number = `00${randNum}`;
      break;
  }

  return {
    type: START_GAME,
    payload: {
      number,
      nickname,
    },
  };
}

export function stopGame(time) {
  return {
    type: STOP_GAME,
    payload: time,
  };
}
