import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Fragment } from 'react';
import Navbar from './layout/Navbar.jsx';
import Users from './users/Users.jsx';
import Search from './users/Search.jsx';
import About from './layout/About.jsx';
import SnackBar from './layout/SnackBar';

const Usersearch = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <SnackBar />
        <Switch>
          <Route
            path='/usersearch'
            component={() => (
              <Fragment>
                <Search />
                <Users />
              </Fragment>
            )}
          />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default Usersearch;
