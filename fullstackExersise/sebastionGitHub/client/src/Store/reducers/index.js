import { combineReducers } from 'redux';
import MovieReducers from './MovieReducers';
import ReviewReducers from './ReviewReducers';

export default combineReducers({
  movies: MovieReducers,
  reviews: ReviewReducers,
});
