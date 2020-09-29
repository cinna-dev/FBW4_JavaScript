import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setText } from '../../../actions/userSearchAction';
import { searchUsers } from '../../../actions/userSearchAction';
import { activateLoading } from '../../../actions/userSearchAction';
import { clearUsers } from '../../../actions/userSearchAction';
import { setAlert } from '../../../actions/userSearchAction';

const Search = props => {
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.searchUsers(props.text);
        }}
        className='form'
      >
        <input
          type='text'
          name='text'
          value={props.text}
          placeholder='Search Users ...'
          onChange={e => props.setText(e.target.value)}
        />
        <input
          className='btn btn-dark btn-block'
          type='submit'
          value='Search'
        />
      </form>
      {props.users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={props.clearUsers}>
          Clear
        </button>
      )}
    </>
  );
};

Search.propTypes = {
  text: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  text: state.users.text,
  users: state.users.users
});

export default connect(mapStateToProps, {
  setText,
  searchUsers,
  activateLoading,
  clearUsers,
  setAlert
})(Search);
