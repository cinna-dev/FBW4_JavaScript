import React from 'react';
import UserForm from '../registrationform/UserForm';
import Usersearch from '../usersearch/Usersearch.jsx';
import NavBar from './NavBar.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' render={props => <UserForm />} />
          <Route exact path='/usersearch' render={props => <Usersearch />} />
        </Switch>
      </Router>
    </div>
  );
};

export default Home;
