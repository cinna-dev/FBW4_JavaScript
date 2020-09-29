import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar.jsx';
import axios from 'axios'; // immport axios module
import Users from './components/users/Users.jsx';
import Search from './components/users/search.jsx';
//import Spinna from './components/Spinna/Spinna.jsx';

// having one state for our react appliction
class App extends Component {
  state = {
    users: [],
    loading: false
  };
  /* async componentDidMount() {
    this.setState({ loading: true });
    const APIKey = process.env.REACT_APP_CLIENT_ID; // prosess.env // reach to the env file to get variable
    const APISecret = process.env.REACT_APP_CLIENT_SECRET;
    console.log(process.env);
    console.log(APIKey);
    const res = await axios.get(
      //axios // Promise based HTTP client for the browser and node.js
      `https://api.github.com/users?client_id=${APIKey}&client_secret=${APISecret}`
    ); //added ?client_id=${APIKey}&client_secret=${APISecret} to the url.
    this.setState({ users: res.data, loading: false }); // .data
    console.log(res.data); 
  }*/

  //async can be put before the parameterzone
  searchText = async text => {
    this.setState({ loading: true });
    const APIKey = process.env.REACT_APP_CLIENT_ID; // prosess.env // reach to the env file to get variable
    const APISecret = process.env.REACT_APP_CLIENT_SECRET;
    console.log(process.env);
    console.log(APIKey);
    const res = await axios.get(
      //axios // Promise based HTTP client for the browser and node.js
      // /search/ q= text
      `https://api.github.com/search/users?q=${text}&client_id=${APIKey}&client_secret=${APISecret}`
    ); //added ?client_id=${APIKey}&client_secret=${APISecret} to the url.
    this.setState({
      users: res.data.items,
      loading: false
    }); // .data
    console.log(res.data);
  };
  resetState = () => {
    this.setState({ users: [], loading: false });
  };
  render() {
    return (
      <div>
        <Navbar />
        <Search
          searchValue={this.searchText}
          clearUsers={this.resetState}
          showClear={this.state.users.length > 0 ? true : false}
        />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
