import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import anecdoteReducer from './reducers/anecdoteReducer';
import notificationReducer from './reducers/notificationReducer';
import filterReducer from './reducers/filterReducer';

const reducer = combineReducers({
  anecdote: anecdoteReducer,
  notification: notificationReducer,
  search: filterReducer,
});

const Store = createStore(reducer, composeWithDevTools());

export default Store;
