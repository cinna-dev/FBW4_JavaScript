import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <Link to='/usersearch'>
          <i className={icon}></i>
          {title}
        </Link>
      </h1>
      <h1>
        <Link to='/about'>About</Link>
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'User Search',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
