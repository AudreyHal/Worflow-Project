import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  )

sagaMiddleware.run(rootSaga);
// export default createStore(rootReducer);
export default store;