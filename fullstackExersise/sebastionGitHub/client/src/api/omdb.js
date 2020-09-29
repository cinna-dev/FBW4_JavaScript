import axios from 'axios';

const key = 'a9ea803d';

const api = axios.create({ baseURL: 'http://www.omdbapi.com/' });

const searchMovies = query => api.get(`?apikey=${key}&s=${query}`);

const getSingleMovie = movieID => api.get(`?apikey=${key}&i=${movieID}`);

const apis = {
  searchMovies,
  getSingleMovie,
};

export default apis;
