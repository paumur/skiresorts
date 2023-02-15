import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import resortsReducer from '../resorts/reducer.js';
import myMiddleware from '../resorts/middleware';

const middlewareToDisable = {
  thunk: true,
};

export const store = configureStore({
  reducer: {
    resorts: resortsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(middlewareToDisable).concat(myMiddleware),
});

export default store;
