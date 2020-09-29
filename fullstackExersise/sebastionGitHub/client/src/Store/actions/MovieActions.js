import {
  FETCH_MOVIE_BEGIN,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAIL,
  FETCH_SEARCH_BEGIN,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_FAIL,
} from '../types';

import omdbapi from '../../api/omdb';

// parantethese if function returns object
const fetchSearchBegin = () => ({
  type: FETCH_SEARCH_BEGIN,
});

const fetchSearchSuccess = (movies) => ({
  type: FETCH_SEARCH_SUCCESS,
  payload: movies,
});

const fetchSearchFail = (error) => ({
  type: FETCH_SEARCH_FAIL,
  payload: error,
});

// if using .then doesnt need to be async
// concatinate functions with return // just imagen original function gets replaced with its return value
export const searchMovies = (query) => {
  //return anonymus arrow function
  return (dispatch) => {
    dispatch(fetchSearchBegin());

    return omdbapi
      .searchMovies(query)
      .then((response) => {
        if (response.data.Response === 'True') {
          dispatch(fetchSearchSuccess(response.data.Search));
        } else {
          dispatch(fetchSearchFail(response.data.Error));
        }
      })
      .catch((error) => {
        dispatch(fetchSearchFail(error));
      });
  };
};

const fetchMovieBegin = () => ({
  type: FETCH_MOVIE_BEGIN,
});

const fetchMovieSuccess = (movieInfo) => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: movieInfo,
});

const fetchMovieFail = (error) => ({
  type: FETCH_MOVIE_FAIL,
  payload: error,
});

export const getMovieInfo = (movieID) => {
  return (dispatch) => {
    dispatch(fetchMovieBegin());

    return omdbapi
      .getSingleMovie(movieID)
      .then((response) => {
        dispatch(fetchMovieSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchMovieFail(error));
      });
  };
};
