import {  createStore ,   applyMiddleware } from 'redux';
import counterReducer from '../Reducers';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSage from '../redux-sagas';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware()
const middlewares = [thunk , sagaMiddleware];
const configureStore = () => {
  const store = createStore(counterReducer , 
    composeWithDevTools(applyMiddleware(...middlewares))
);
  sagaMiddleware.run(rootSage)
  return store;
};
export default configureStore;
