import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className='navbar bg-primary'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/body'>Input</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
