import { START_GAME } from './constants';

const initialState = {
  number: '',
  nickname: '',
};

export default function(state = initialState, action) {
  switch(action.type) {
    case START_GAME:
      let number = '';
      const randNum = `${Math.floor(0 - 0.5 + Math.random() * (999 - 0 + 1))}`;
      const numLen = randNum.length;

      if(numLen === 3) { number = randNum; }
      else if(numLen === 2) { number = '0' + randNum; }
      else { number = '00' + randNum; }

      return {
        ...state,
        number,
        nickname: action.payload
      }
    default:
      return state;
  }
}