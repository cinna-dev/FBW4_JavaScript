import React, { Component } from 'react';

class Dropdown extends Component {
  render() {
    return (
      <>
        <div className='btn-group'>
          <button
            className='btn btn-secondary btn-lg dropdown-toggle'
            type='button'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            DrowDown
          </button>
          <div className='dropdown-menu'>
            <a className='dropdown-item' href='#'>
              Buy
            </a>
            <a className='dropdown-item' href='#'>
              Sell
            </a>
          </div>
        </div>
      </>
    );
  }
}
export default Dropdown;
