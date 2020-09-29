import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header
        style={{
          backgroundColor: 'rgb(99, 81, 206)',
          fontFamily: 'arial',
          height: '120px'
        }}
        className=' border border-bottom border-info py-4 mb-3'
      >
        <h1 className='font-weight-bold'>Housing Market</h1>
      </header>
    );
  }
}
export default Header;
