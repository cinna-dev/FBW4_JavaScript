import React, { Fragment, Component } from 'react';
//BrowserRouter is the router implimenttion for HTML 5 browser
//Lind is your replacement for anchor tags.
//Route is the conditionally shown component based of matching a path to  a URL
//Switch retruns only the first matching route rather than all matching routes.
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'; // in {} are modules that are not exportet as "default" // as creates an allias name
import './App.css';
const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Contact = ({ inputHandler }) => (
  <div>
    <form onSubmit={inputHandler}></form> <input type='submit' name='email' />
  </div>
);
//  We give each route either a target "Component" , or wie can send a function "render"
//
class App extends Component {
  state = {};
  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Router>
        <Fragment>
          <Link to='/'>Main</Link> {/* just slash means Home */}
          <Link to={{ pathname: '/about' }}>About</Link>
          <Link to='/contact'>contact us</Link>
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <Header />
                  <Footer inputHandler={this.inputHandler} />
                </Fragment>
              )}
            />
            <Route
              exact
              path='/body'
              render={props => (
                <Fragment>
                  <Body inputHandler={this.inputHandler} />
                </Fragment>
              )}
            />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
