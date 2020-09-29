import React, { Component } from 'react';
import Dropdown from '../Dropdown/dropdown';
import Cardsection from '../CardSection/cardsection';

class Body extends Component {
  render() {
    return (
      <div className='container '>
        <div className='row '>
          <div className='col-12 '>
            <Dropdown />
            <Cardsection />
          </div>
        </div>
      </div>
    );
  }
}
export default Body;
