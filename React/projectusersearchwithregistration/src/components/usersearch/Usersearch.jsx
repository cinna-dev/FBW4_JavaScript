import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Fragment, Component } from 'react';

import Navbar from './layout/Navbar.jsx';
import axios from 'axios';
import Users from './users/Users.jsx';
import Search from './users/Search.jsx';
import Alert from './layout/Alert.jsx';
import About from './layout/About.jsx';
import SnackBar from './layout/SnackBar';
//having one state for our all react application
class Usersearch extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  searchText = async text => {
    this.setState({ loading: true });
    const APIKey = process.env.REACT_APP_CLIENT_ID;
    const APISecret = process.env.REACT_APP_CLIENT_SECRET;
    // console.log(APIKey);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${APIKey}&client_secret=${APISecret}`
    );
    this.setState({ users: res.data.items, loading: false });
    console.log(res.data);
  };
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };
  deleteAlert = () => {
    this.setState({ alert: null });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <SnackBar alert={this.state.alert} />
          <Switch>
            <Route
              path='/usersearch'
              render={props => (
                <Fragment>
                  <Search
                    searchValue={this.searchText}
                    clearUsers={this.clearUsers}
                    showClear={this.state.users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users
                    loading={this.state.loading}
                    users={this.state.users}
                  />
                </Fragment>
              )}
            />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Usersearch;
