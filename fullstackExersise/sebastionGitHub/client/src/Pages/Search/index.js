import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../../Store/actions/MovieActions';
import MovieList from '../../Components/MovieList';

class Search extends Component {
  state = {
    searchInput: '',
    searched: false,
  };

  handleInput = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  handleSearch = () => {
    let inputContent = this.state.searchInput;
    /* if (inputContent.length) { */
    this.props.searchMovies(this.state.searchInput);
    this.setState({
      searched: true,
    });
    /* } else {
      alert('Please fill the input before search');
    } */
  };

  handleOutput = () => {
    let searched = this.state.searched;
    let error = this.props.error;
    let isLoading = this.props.isLoading;
    let output = null;

    if (searched) {
      if (isLoading) {
        output = <h1>Waiting infomration</h1>;
      } else {
        if (error) {
          output = <h1>{this.props.errorMessage}</h1>;
        } else {
          output = (
            <MovieList
              movieList={this.props.movieList}
              isLoading={this.props.isLoading}
            />
          );
        }
      }
    }
    return output;
  };

  render() {
    let info = this.handleOutput();
    return (
      <div>
        <input
          type='text'
          placeholder='Search a movie...'
          onChange={this.handleInput}
        />
        <button onClick={this.handleSearch}>Search</button>
        <div>
          {/* {!this.props.isLoading && this.state.searched ? (
            
          )  */}
          {info}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieList: state.movies.movieList,
  isLoading: state.movies.isLoading,
  error: state.movies.error,
  errorMessage: state.movies.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  searchMovies: (query) => dispatch(searchMovies(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
