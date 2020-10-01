import { START_GAME, STOP_GAME } from './constants';

const initialState = {
  isStarted: false,
  nickname: '',
  number: '',
  time: '00:00:00',
};

export default function(state = initialState, action) {
  switch(action.type) {
    case START_GAME:
      let number = '';
      const randNum = Math.floor(0 - 0.5 + Math.random() * (999 - 0 + 1)).toString();
      const numLen = randNum.length;

      if(numLen === 3) { number = randNum; }
      else if(numLen === 2) { number = '0' + randNum; }
      else { number = '00' + randNum; }

      return {
        ...state,
        number,
        isStarted: true,
        nickname: action.payload
      }
    case STOP_GAME:
      return {
        ...state,
        isStarted: false,
        time: action.payload || '00:00:00',
      }
    default:
      return state;
  }
}