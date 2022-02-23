import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga, testSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  thunk,
  sagaMiddleware
]
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, withDevTools(
  applyMiddleware(...middleware)
))

sagaMiddleware.run(rootSaga );
