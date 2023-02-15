import { data } from '../../resortsData';
import * as types from './types';

const INITIAL_STATE = {
  resorts: data,
  resortsQuery: null,
  queryKey: null,
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ALL_RESORTS: {
      return {
        ...state,
      };
    }
    case types.RESORTS_QUERY: {
      const filteredResorts = data.filter((resort) => {
        if (resort.Region[0] && !null) {
          return (
            resort.Region[0].name
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            resort.SkiArea.name
              .toLowerCase()
              .includes(action.payload.toLowerCase())
          );
        }
      });
      return {
        ...state,
        resortsQuery: filteredResorts,
        queryKey: action.payload,
      };
    }
    case types.ADD_OR_REMOVE_FAVORITES: {
      if (!state.favorites.includes(action.payload)) {
        const newFavorites = [...state.favorites, action.payload];
        return {
          ...state,
          favorites: newFavorites,
        };
      } else {
        const index = state.favorites.indexOf(action.payload);
        const favorites = [...state.favorites];
        favorites.splice(index, 1);
        return {
          ...state,
          favorites: favorites,
        };
      }
    }
    default:
      return state;
  }
}

export default reducer;
