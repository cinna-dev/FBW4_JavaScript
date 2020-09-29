import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { Fragment, Component } from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer';
import Navbar from './Navbar';
import './App.css';

class Father extends Component {
  state = {
    email: 'Default',
    password: 'Default'
  };
  submitHandler = e => {
    e.preventDefault();
    this.setState({
      email: e.target.email.value, // e.target is the form and if the inputs have names they can be selected directly
      password: e.target.password.value
    });
  };

  render() {
    return (
      <Router>
        <Fragment className='App'>
          <Navbar />
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <>
                  <Header email={this.state.email} />
                  <Footer password={this.state.password} />
                </>
              )}
            ></Route>
            <Route
              path='/body'
              render={props => <Body submitHandler={this.submitHandler} />}
            ></Route>
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default Father;
