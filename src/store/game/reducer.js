import { START_GAME, STOP_GAME } from './constants';

const initialState = {
  isStarted: false,
  nickname: '',
  number: '',
  time: '00:00:00',
};

export default function (state = initialState, { type, payload }) {
  switch(type) {
    case START_GAME:
      return {
        ...state,
        isStarted: true,
        nickname: payload.nickname,
        number: payload.number,
      };
    case STOP_GAME:
      return {
        ...state,
        isStarted: false,
        time: payload || '00:00:00',
      };
    default:
      return state;
  }
}
