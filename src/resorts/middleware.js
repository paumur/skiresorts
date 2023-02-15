import * as types from '../resorts/types';

const myMiddleware = (store) => (next) => (action) => {
  next(action);
  if (action.type === types.ADD_OR_REMOVE_FAVORITES) {
    localStorage.setItem(
      'favorites',
      JSON.stringify(store.getState().resorts.favorites)
    );
  }
};

export default myMiddleware;
