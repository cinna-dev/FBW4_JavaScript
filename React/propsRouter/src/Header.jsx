import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className='all-center bg-dark'>
        <h1 className='x-large '>{this.props.title}</h1>
      </header>
    );
  }
}

export default Header;
