import types from '../types';

const initialState = {
  list: []
};

const movies = (state=initialState, action) => {
  const {type} = action;
  switch (type) {
    case types.SET_MOVIE_LIST:
      return {
        list: [...state.list, ...action.payload]
      };
    default:
      return state;
  }
};

export default movies;
