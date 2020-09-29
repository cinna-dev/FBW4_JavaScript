import React, { Fragment, Component } from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer';
import Navbar from './navbar';
import './App.css';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class Father extends Component {
  state = {
    title: 'My Header Title',
    footer: 'my Footer'
  };
  myDefinition = e => {
    e.preventDefault();
    this.setState({
      [e.target.children[0].name]: e.target.children[0].value,
      [e.target.children[1].name]: e.target.children[1].value
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
              render={(
                props //needs the props prarameter when using props like "title" "footer" etc.
              ) => (
                <>
                  {/* anonymous Fragment */}
                  <Header title={this.state.title} />
                  <Footer footer={this.state.footer} />
                </>
              )}
            />
            <Route
              path='/body'
              render={props => <Body changeHandler={this.myDefinition} />}
            />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default Father;
