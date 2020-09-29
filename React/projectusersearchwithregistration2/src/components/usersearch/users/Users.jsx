import React from 'react';
import Useritem from './Useritem.jsx';
import Spinner from '../layout/Spinner.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Users = props => {
  return props.loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {props.users.map(item => (
        <Useritem key={item.id} user={item} />
      ))}
    </div>
  );
};
Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

const mapStateToProps = state => ({
  users: state.users.users,
  loading: state.users.loading
});

export default connect(mapStateToProps)(Users);
