import React, { Component } from 'react'; //rce  // react class export
import PropTypes from 'prop-types'; //impt

class Search extends Component {
  state = {
    text: ''
  };
  // sets propTypes
  static propTypes = {
    searchValue: PropTypes.func.isRequired, //ptfr
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value }); // automatically creates the key for State from the e.target.name value and saves e.target.value
  };
  submitHandler = e => {
    this.props.searchValue(this.state.text);
    this.setState({ text: '' });
    e.preventDefault();
  };
  clearHandler = e => {
    this.props.clearState();
    e.preventDefault();
  };
  render() {
    return (
      <>
        <form onSubmit={this.submitHandler} className='form'>
          <input
            type='text'
            name='text'
            value={
              this.state.text
            } /* {this.state.text} directly to the state  */
            placeholder='search Users ...'
            onChange={this.changeHandler}
          />
          <input
            className='btn btn-block btn-dark'
            type='submit'
            value='Search'
          />
        </form>
        {/* false boolen will not be  returned  from the Braces to the Component Return*/}
        {this.props.showClear && (
          <button
            className='btn btn-light btn-block'
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </>
    );
  }
}

export default Search;
