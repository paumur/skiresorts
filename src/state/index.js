import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import resortsReducer from '../resorts/reducer.js';

const rootReducer = combineReducers({
  resorts: resortsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
