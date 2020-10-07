import game_reducer from '../../../src/store/game/reducer';
import { startGame, stopGame } from '../../../src/store/game/actions';

const stateGameReducer = {
  isStarted: false,
  nickname: '',
  number: '',
  time: '00:00:00',
};

it('game is started', () => {
  const action = startGame('Nikolay');
  const newState = game_reducer(stateGameReducer, action);
  expect(newState.isStarted).toBe(true);
  expect(newState.nickname).toBe('Nikolay');
  expect(newState.number).toBe(action.payload.number);
  expect(newState.number).not.toBe('' || undefined || null);
});

it('game is stops without control time', () => {
  const action = stopGame();
  const newState = game_reducer(stateGameReducer, action);
  expect(newState.isStarted).toBe(false);
});

it('game is stops with the control time', () => {
  const action = stopGame('00:30:00');
  const newState = game_reducer(stateGameReducer, action);
  expect(newState.isStarted).toBe(false);
  expect(newState.time).toBe('00:30:00');
});
