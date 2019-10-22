import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, logger)
  )

sagaMiddleware.run(rootSaga);
// export default createStore(rootReducer);
export default store;