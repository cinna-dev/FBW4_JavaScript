import React, { Component } from 'react';
import './body.css';
import LeftSide from '../LeftSide/leftSide';
import RightSide from '../RigthSide/rightSide';
import Article from '../Article/article';

class Body extends Component {
  render() {
    return (
      <div className='Body'>
        <LeftSide />
        <Article />
        <RightSide />
      </div>
    );
  }
}

export default Body;
