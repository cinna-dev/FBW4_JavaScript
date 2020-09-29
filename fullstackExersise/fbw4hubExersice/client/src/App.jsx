import React, { Fragment } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './components/layout/NavBar';
import Home from './components/layout/Home';
import About from './components/layout/About';
import ProfileForm from './components/layout/ProfileForm';
import Spinner from './components/layout/Spinner';
import Alerts from './components/layout/Alert';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/create-profile' component={ProfileForm} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
