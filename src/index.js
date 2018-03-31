import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
}

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(logger, thunk))
);
  

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,  document.getElementById('root'));  
