import * as types from './types';

export const allResorts = () => {
  return (dispatch, getState) => {
    dispatch({
      type: types.ALL_RESORTS,
    });
  };
};

export const resortsQuery = (query) => {
  return (dispatch, getState) => {
    dispatch({
      type: types.RESORTS_QUERY,
      payload: query,
    });
  };
};

export const favorites = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: types.ADD_OR_REMOVE_FAVORITES,
      payload: id,
    });
  };
};
