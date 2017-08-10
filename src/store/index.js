import { createStore } from 'redux';

import reducers from './reducers';
import middleware, { saga } from './middleware';
import dataSaga from './sagas/data_saga';

// Centralized application state
// For more information visit http://redux.js.org/
export default () => {
  const store = createStore(reducers, middleware);
  saga.run(dataSaga);
  return store;
};
