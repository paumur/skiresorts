import * as types from '../resorts/types';

const myMiddleware = (store) => (next) => (action) => {
  if (action.type === types.ADD_OR_REMOVE_FAVORITES) {
    if (store.getState().resorts.favorites.includes(action.payload)) {
      const index = store.getState().resorts.favorites.indexOf(action.payload);
      const favorites = [...store.getState().resorts.favorites];
      favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      const newFavorites = [
        ...store.getState().resorts.favorites,
        action.payload,
      ];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  }
  return next(action);
};

export default myMiddleware;
