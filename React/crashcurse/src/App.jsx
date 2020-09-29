import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts';
import AddProfile from './AddProfile';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    posts: []
  };
  componentDidMount = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({ posts: res.data });
  };
  submitHandler = e => {
    e.preventDefault();
    const profile = {
      id: this.state.posts.length,
      name: e.target.name.value,
      username: e.target.username.value,
      email: e.target.email.value,
      address: {
        street: e.target.street.value,
        suite: e.target.suite,
        city: e.target.city.value,
        zipcode: e.target.zipcode.value,
        geo: {
          lat: e.target.lat.value,
          lng: e.target.lng.value
        }
      },
      phone: e.target.phone.value,
      website: e.target.website.value,
      company: {
        name: e.target.companyName.value,
        catchPhrase: e.target.catchPhrase.value,
        bs: e.target.bs.value
      }
    };
    axios
      .post(profile)
      .then(function(response) {
        console.log(response);
        this.setState(previousState => ({
          users: previousState.users.unshift(profile)
        }));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>Welcome to Redux-React example</h1>
        </header>
        <AddProfile submitHandler={this.submitHandler} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
