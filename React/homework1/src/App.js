import React, { Component } from 'react';
import './App.css';
import Input from './component/Input/Input.jsx';
import Output from './component/Output/Output.jsx';

class App extends Component {
  state = {
    email: '',
    password: ''
  };
  Handlemessage = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  componentDidUpdate() {
    console.log('component did update ', this.state);
  }
  render() {
    return (
      <>
        <header className='App'>HomeWork</header>
        <Input sendBack={this.Handlemessage} />
        <Output email={this.state.email} password={this.state.password} />
      </>
    );
  }
}

export default App;
