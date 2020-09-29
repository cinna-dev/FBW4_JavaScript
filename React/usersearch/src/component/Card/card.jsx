import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { img, title, text } = this.props.card;
    return (
      <div className='card mx-auto my-auto ' style={{ width: '18rem' }}>
        <img src={img} className='card-img-top' alt='...'></img>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{text}</p>
        </div>
      </div>
    );
  }
}
export default Card;
