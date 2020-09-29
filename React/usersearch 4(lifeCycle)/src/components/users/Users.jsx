import React, { Component } from 'react';
import Useritem from './Useritem.jsx';
import Spinner from '../Spinner/Spinner.jsx';
import PropTypes from 'prop-types';

//  props keys are getting
const Users = ({ loading, users }) => {
  return loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map(item => (
        <Useritem key={item.id} user={item} />
      ))}
    </div>
  );
};

// defines what
Users.prototype = {
  user: PropTypes.array.isRequired, //ptar
  loading: PropTypes.bool.isRequired // ptbr
};
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
