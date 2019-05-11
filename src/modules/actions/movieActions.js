import types from '../types';

export const setMovieList = (movieList=[]) => {
  return {
    type: types.SET_MOVIE_LIST,
    payload: movieList
  }
}
