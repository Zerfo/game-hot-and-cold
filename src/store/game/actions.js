import { START_GAME, STOP_GAME } from './constants';

export function startGame(nickname) {
  let number = '';
  const randNum = Math.floor(0 - 0.5 + Math.random() * (999 - 0 + 1)).toString();
  const numLen = randNum.length;

  if(numLen === 3) { number = randNum; }
  else if(numLen === 2) { number = '0' + randNum; }
  else { number = '00' + randNum; }

  return {
    type: START_GAME,
    payload: {
      number,
      nickname
    }
  }
}

export function stopGame(time) {
  return {
    type: STOP_GAME,
    payload: time,
  }
}
