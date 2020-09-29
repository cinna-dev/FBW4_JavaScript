//rce tab
import React, { Component } from 'react';
import './article.css';

class Article extends Component {
  //state Object
  state = {
    InputValue: ''
  };
  // passing an Object
  ChangeTitle(ev) {
    this.setState({
      InputValue: ev.target.value
    });
  }
  render() {
    // predefined name
    return (
      <div className='Article'>
        <input
          type='text'
          id='inpt'
          className='inputTitle'
          placeholder='Enter title'
          onChange={e => {
            this.ChangeTitle(e);
          }}
        />
        <h2 id='title'>{this.state.InputValue}</h2>
        <p>
          this is an example of class compnents using only normal JS ES6 modules
        </p>
        <p>we will test the module export and import capabilities</p>
      </div>
    );
  }
}

export default Article;
