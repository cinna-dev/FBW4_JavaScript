import React from 'react';
import { Navbar, Nav, Button, NavItem, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Navbar.Brand as={Link} to='/'>
        <img
          alt=''
          src='./logo192.png'
          width='30'
          height='30'
          className='d-inline-block align-top'
        />
        FBW4 Hub
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link to='/' as={Link}>
            Home
          </Nav.Link>
          <Nav.Link to='/about' as={Link}>
            About
          </Nav.Link>
        </Nav>
        <Nav className='mx-4'>
          <Button
            as={Link}
            size='lg'
            variant='outline-info'
            className='text-info mx-2'
            to='/login'
          >
            Login
          </Button>

          <Button
            as={Link}
            size='lg'
            variant='info'
            className='text-light mx-2'
            to='/create-profile'
          >
            Create Profile
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    /*  <nav className='navbar navbar-expand  navbar-dark bg-dark'>
      <div className='container'>
        <ul className='navbar-nav '>
          <li className='navbar-brand'>FBW4 Hub</li>
        </ul>
        <ul className='nav navbar-nav nav-tabs mr-auto'>
          <li className=' nav-item'>
            <Link to='/' className='nav-link '>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/about' className='nav-link'>
              about
            </Link>
          </li>
        </ul>
      </div>
    </nav> */
  );
};

export default NavBar;
