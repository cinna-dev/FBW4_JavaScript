import React, { Component } from 'react';
import Card from '../Card/card';

class Cardsection extends Component {
  render() {
    return (
      <div className='container mb-4'>
        <div className='row'>
          <Card
            img='https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            title='House 1'
            text='Some quick example about the House in Question.'
          />
          <Card
            img='https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
            title='House 2'
            text='Some quick example about the House in Question.'
          />
          <Card
            img='https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070__340.jpg'
            title='House 3'
            text='Some quick example about the House in Question.'
          />
        </div>
      </div>
    );
  }
}
export default Cardsection;
