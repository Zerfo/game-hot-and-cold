import { START_GAME, STOP_GAME } from './constants';

export function startGame(nickname) {
  return {
    type: START_GAME,
    payload: nickname
  }
}

export function stopGame(time) {
  return {
    type: STOP_GAME,
    payload: time,
  }
}
