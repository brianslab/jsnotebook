import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import { saveCellsMiddleware } from './middlewares/saveCellsMiddleware';

export const store = createStore(
  reducers,
  {},
  applyMiddleware(saveCellsMiddleware, thunk)
);
