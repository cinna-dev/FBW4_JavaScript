import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import axios from 'axios';
class App extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '15681215-369f6dca05eaa5ae89090530d',
    images: []
  };
  onTextChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        //? means adding attributes  //$ more attributes // q= searching //safeseartch  nsfw attribure
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    );
  };
  onAmountChange = (e, index, value) => {
    // value gets passed from the target
    this.setState({
      amount: value
    });
  };
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search
            searchText={this.state.searchText}
            amount={this.state.amount}
            images={this.state.images}
            onTextChange={this.onTextChange}
            onAmountChange={this.onAmountChange}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
