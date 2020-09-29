import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getMovieInfo } from '../../Store/actions/MovieActions';

class SingleMovie extends Component {
  state = { movieID: this.props.match.params.id }; //gets the id from the url sended in app. router path='/single-mvie:id'

  componentDidMount = () => {
    this.props.getMovieInfo(this.state.movieID);
  };

  handleContent = () => {
    let isLoading = this.props.isLoading;
    let movieInfo = this.props.selectedMovie;
    let error = this.props.error;
    let errorMessage = this.props.errorMessage;
    let content = null;

    if (isLoading) {
      content = <h1>Waiting for information</h1>;
    } else {
      if (error) {
        content = <h1>{errorMessage}</h1>;
      } else {
        if (typeof movieInfo.Title !== 'undefined') {
          content = (
            <div>
              <img src={movieInfo.Poster} alt={movieInfo.Title} />
              <h3>{movieInfo.Title}</h3>
              <p>{movieInfo.Plot}</p>
              <Link to='/create-review'>Create a Review for this Movie</Link>
            </div>
          );
        }
      }
    }
    return content;
  };

  render() {
    let content = this.handleContent();
    console.log(this.props);
    return <div>{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  selectedMovie: state.movies.selectedMovie,
  isLoading: state.movies.isLoading,
  error: state.movies.error,
  errorMessage: state.movies.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  getMovieInfo: (movieID) => dispatch(getMovieInfo(movieID)),
});

const WRsingleMovie = withRouter(SingleMovie); // connect SingleMovie with withRouter so we can get the params.id

export default connect(mapStateToProps, mapDispatchToProps)(WRsingleMovie);
