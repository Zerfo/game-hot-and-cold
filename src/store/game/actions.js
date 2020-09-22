import { START_GAME } from './constants';

export function startGame(nickname) {
  return {
    type: START_GAME,
    payload: nickname
  }
}