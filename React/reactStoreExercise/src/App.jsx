import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import Direct from './components/Direct';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './App.css';

class App extends Component {
  state = {
    value: 'one',
    products: [
      {
        name: 'white Cate',
        price: 'Price 100$',
        img: 'https://lucid-cray-7b89b8.netlify.com/imgs/1.jpg'
      },
      {
        name: 'Angry Cat',
        price: 'Price 1000$',
        img: 'https://lucid-cray-7b89b8.netlify.com/imgs/2.jpg'
      },
      {
        name: 'Bengal cat',
        price: 'Price 2000$',
        img: 'https://lucid-cray-7b89b8.netlify.com/imgs/3.jpg'
      },
      {
        name: 'Persian cat',
        price: 'Price 150$',
        img: 'https://lucid-cray-7b89b8.netlify.com/imgs/4.webp'
      }
    ]
  };
  handleChange = (event, value) => {
    this.setState({ value: value });
  };
  render() {
    const { value, products } = this.state;

    return (
      <React.Fragment>
        <Container maxWidth='lg'>
          <Navbar value={value} handleChange={this.handleChange} />
          <Direct value={value} products={products} />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
