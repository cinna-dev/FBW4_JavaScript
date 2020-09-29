import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className='card mx-auto my-auto ' style={{ width: '18rem' }}>
        <img src={this.props.img} className='card-img-top' alt='...'></img>
        <div className='card-body'>
          <h5 className='card-title'>{this.props.title}</h5>
          <p className='card-text'>{this.props.text}</p>
        </div>
      </div>
    );
  }
}
export default Card;
