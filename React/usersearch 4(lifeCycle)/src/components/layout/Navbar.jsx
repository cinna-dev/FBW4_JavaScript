import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* const Navbar = props => {
  console.log(Navbar);
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={props.icon}></i>
        {props.title}
      </h1>
    </nav>
  );
}; */

// Alternative Way // uses instead of the props object an anonymous object with the  keys title and icon
const Navbar = ({ title, icon }) => {
  //console.log(Navbar);
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}></i>
        {title}
      </h1>
    </nav>
  );
};
// takes the default props when no props are being passed
Navbar.defaultProps = {
  title: 'User Search',
  icon: 'fab fa-github'
};

//defining a the type of my props
Navbar.propTypes = {
  title: PropTypes.string.isRequired, //ptsr
  icon: PropTypes.string.isRequired
};
export default Navbar;
