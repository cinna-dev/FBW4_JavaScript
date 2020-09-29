import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { saveReviews } from '../../Store/actions/ReviewActions';

class CreateReviews extends Component {
  state = {
    title: '',
    rating: 0,
    comment: '',
  };

  handleInputTitle = (e) => {
    const title = e.target.value;
    this.setState({ title: title });
  };
  handleInputRating = (e) => {
    const rating = e.target.validity.valid ? e.target.value : this.state.rating;
    this.setState({ rating: rating });
  };
  handleInputComment = (e) => {
    const comment = e.target.value;
    this.setState({ comment: comment });
  };
  handleSendData = () => {
    console.log(this.props.selectedMovie);
    let data = {
      title: this.state.title,
      rating: this.state.rating,
      comment: this.state.comment,
      movieTitle: this.props.selectedMovie.Title,
      movieID: this.props.selectedMovie.imdbID,
    };

    this.props.saveReviews(data);
  };

  render() {
    return (
      <div className='container form-group'>
        <h1>Add new Review</h1>
        <h3>Movie/Series: {this.props.selectedMovie.Title} </h3>
        <label htmlFor='title'>Title</label>
        <input
          name='title'
          type='text'
          className='form-control'
          value={this.state.title}
          onChange={this.handleInputTitle}
        ></input>
        <label htmlFor='rating'>Rating</label>
        <input
          name='rating'
          type='Number'
          min='0'
          max='10'
          className='form-control'
          value={this.state.rating}
          onChange={this.handleInputRating}
        ></input>
        <label htmlFor='comment'>Comment</label>
        <input
          name='comment'
          type='text'
          className='form-control'
          value={this.state.comment}
          onChange={this.handleInputComment}
        ></input>
        <br />
        <button className='btn btn-primary' onClick={this.handleSendData}>
          Add Review
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedMovie: state.movies.selectedMovie,
  error: state.reviews.error,
  errorMessage: state.reviews.errorMessage,
  newReview: state.reviews.newReview,
});
const mapDispatchToProps = (dispatch) => ({
  saveReviews: (data) => dispatch(saveReviews(data)),
});

const WRCreateReview = withRouter(CreateReviews);

export default connect(mapStateToProps, mapDispatchToProps)(WRCreateReview);
