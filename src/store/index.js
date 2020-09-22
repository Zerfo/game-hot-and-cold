import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from './config/rootReducer';

function configureStore(initialState = {}) {
  const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(applyMiddleware())
  );

  return store;
}

export default configureStore();
