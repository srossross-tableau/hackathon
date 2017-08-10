const debug = require('debug')('data:store');

export default store => next => (action) => {
  debug(`dispatching ${action.type}`, action);
  const result = next(action);
  debug('next state', store.getState());
  return result;
};
