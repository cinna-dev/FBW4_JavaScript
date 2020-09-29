import React, { Component } from 'react';
import apis from '../api';

class Table extends Component {
  state = {
    isLoading: false,
    listReviews: [],
  };
  componentDidMount = () => {
    this.setState({ isLoading: true });
    apis.getReviews().then(response => {
      console.log(response.data);
      this.setState({ listReviews: response.data, isLoading: false });
    });
  };

  render() {
    let output = null;
    if (this.state.isLoading) {
      output = <h1>Data is loading from backed</h1>;
    } else {
      if (this.state.listReviews.length) {
        output = this.state.listReviews.map(item => {
          return (
            <div key={item._id}>
              <p>{item.title}</p>
              <p>{item.rating}</p>
              <p>{item.comment}</p>
              <p>{item.date}</p>
            </div>
          );
        });
      } else {
        output = <h1>No reviews</h1>;
      }
    }
    return <div>{output}</div>;
  }
}

export default Table;
