import React, { Component } from 'react';

class Useritem extends Component {
  //first way of define State
  /* constructor() {
    super(); // takes the properties of the component class and adds it to Useritem class // empty paranthese will import all unspecified porperties
    this.state = { x: 'me' };
  } */

  // second way of define State
  /* state = {
    id: 1,
    login: 'mjombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo'
  }; */
  render() {
    /* const { login, avatar_url, html_url } = this.state; //obj Destructoring */
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className='card text-center'>
        <img src={avatar_url} className='round-img' style={{ width: '60px' }} />
        <h3>{login}</h3>
        <a target='_blank' href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    );
  }
}

export default Useritem;
