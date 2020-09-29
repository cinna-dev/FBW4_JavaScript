import React from 'react'; // imr
import PropTypes from 'prop-types'; //impt
//import React, { Component } from 'react' // imrc

const Useritem = ({ user: { login, avatar_url, html_url } }) => {
  // destructoring user object into variables
  //const { login, avatar_url, html_url } = props.user;
  login = login + 's';
  return (
    <div className='card text-center'>
      <img
        alt='login'
        src={avatar_url}
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

Useritem.propTypes = {
  // defines what datatype the props Object can contain
  user: PropTypes.object.isRequired //ptor
};
export default Useritem;
// ctrl+c in terminal to cancel the npm server
// npm i axios // get axios client
