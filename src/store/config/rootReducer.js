import { combineReducers } from 'redux';

import game from 'store/game/reducer';

const rootReducer = combineReducers({
  game,
});

export default rootReducer;
