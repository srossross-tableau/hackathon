import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import logging from './logging_middleware';

export const saga = createSagaMiddleware();
export default applyMiddleware(logging, saga);
