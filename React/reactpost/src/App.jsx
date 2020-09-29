import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    posts: []
  };
  //null == {} empty object
  searchText = async text => {
    this.setState({ loading: true });
    const APIKey = process.env.REACT_APP_CLIENT_ID;
    const APISecret = process.env.REACT_APP_CLIENT_SECRET;
    // console.log(APIKey);
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
      /* `https://jsonplaceholder.typicode.com/postsq=${text}&client_id=${APIKey}&client_secret=${APISecret}` */
    );
    this.setState({ posts: res.data.items });
  };
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>Welcome to Redux-React example</h1>
        </header>
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
