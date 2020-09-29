import React, { Component } from 'react';
import Navbar from './component/layout/Navbar.jsx';
import './App.css';

import Users from './component/users/Users.jsx';

//class needs to be extendet with React.Component // React is a collection of Classes
//ne need for literal`` inside  jsx
//class in css  className in js
class App extends Component {
  render() {
    const title = 'User Search'; // standart variable
    const numbers = [1, 2, 3, 4];
    return (
      <div>
        <Navbar title={title} icon='fab fa-github' />
        <Users />
        {/* will overwrite the default props */}
        {/*react property
    //needs braces when using a js variable inside jsx 
    //phrase will be part of the constructed properties */}
      </div>
    );
  }
}
//<> </>anonymus fragments // is not a real html element
export default App;
