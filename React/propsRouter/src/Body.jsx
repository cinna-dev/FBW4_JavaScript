import React, { Component } from 'react';

export class Body extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.changeHandler}>
          <input name='title' type='text' placeholder='email' />
          <input name='footer' type='text' placeholder='password' />
          <input className='btn btn-block' type='submit' value='submit' />
        </form>
      </div>
    );
  }
}

export default Body;
