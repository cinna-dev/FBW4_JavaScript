import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Body from './components/Body/body';

class App extends Component {
  render() {
    //a live cycle hook
    return (
      <div className='App'>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

/* <Footer />
      <Body /> */

export default App;
