import {
  FETCH_REVIEWS_BEGIN,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_FAIL,
  SAVE_REVIEWS_FAIL,
  SAVE_REVIEWS_SUCCESS,
  DELETE_REVIEWS_FAIL,
  DELETE_REVIEWS_SUCCESS,
  UPDATE_REVIEWS_FAIL,
  UPDATE_REVIEWS_SUCCESS,
  FETCH_MOVIE_REVIEWS_BEGIN,
  FETCH_MOVIE_REVIEWS_SUCCESS,
  FETCH_MOVIE_REVIEWS_FAIL,
} from '../types';

const initialState = {
  isLoading: false,
  error: false,
  errorMessage: '',
  reviewsList: [],
  updatedReview: {},
  newReview: {},
  deletedReview: {},
  movieReviews: [],
};

export default function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_REVIEWS_BEGIN:
    case FETCH_REVIEWS_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: false,
        errorMessage: '',
      };

    case FETCH_REVIEWS_FAIL:
    case FETCH_MOVIE_REVIEWS_FAIL:
    case SAVE_REVIEWS_FAIL:
    case DELETE_REVIEWS_FAIL:
    case UPDATE_REVIEWS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: true,
        errorMessage: action.payload,
      };

    case FETCH_MOVIE_REVIEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movieReviews: action.payload,
      };

    case FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        reviewsList: action.payload,
      };
    case SAVE_REVIEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        reviewsList: [...state.reviewsList, action.payload],
        newReview: action.payload,
      };
    case UPDATE_REVIEWS_SUCCESS:
      let newReviewList = state.reviewsList.map((review) => {
        if (review._id === action.payload._id) {
          return action.payload;
        } else {
          return review._id;
        }
      });
      return {
        ...state,
        isLoading: false,
        reviewsList: newReviewList,
        updatedReview: action.payload,
      };

    case DELETE_REVIEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        reviewsList: state.reviewsList.filter((review) => {
          if (review._id === action.payload._id) {
            return false;
          } else {
            return true;
          }
        }),
        deletedReview: action.payload,
      };

    default:
      return state;
  }
}
