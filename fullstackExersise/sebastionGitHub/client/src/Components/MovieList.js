import React from 'react';
import Spinner from './spinner.gif';
import { Link } from 'react-router-dom';
/* 
const MovieList = ({ movieList, isLoading }) => {
  return isLoading ? (
    <div>
      {
        <img
          style={{ width: '600px', height: '600px' }}
          src={Spinner}
          alt='Loading...'
        />
      }
    </div>
  ) : movieList.length ? (
    <ul style={{ listStyleType: 'none' }}>
      {movieList.map(({ Title, Year, imdbID, Type, Poster }) => (
        <li key={imdbId}>
          <img src={Poster} alt='Picture' />
          <div>Title: {Title}</div>
          <div>Year: {Year}</div>
          <div>imdbID: {imdbID}</div>
          <div>Type: {Type}</div>
        </li>
      ))}
    </ul>
  ) : null;
};

export default MovieList; */

const MovieList = ({ movieList, isLoading }) => {
  let output = null;
  let list = movieList;

  if (list.length) {
    output = list.map((movie) => (
      <div key={movie.imdbID}>
        {/* /single-movie/12e3af etc... */}
        <Link to={`/single-movie/${movie.imdbID}`}>
          <h2>{movie.Title}</h2>
        </Link>
        <img src={movie.Poster} alt={movie.Title} />
      </div>
    ));
  }
  return <div>{output}</div>;
};

export default MovieList;
