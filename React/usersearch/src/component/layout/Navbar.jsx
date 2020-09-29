import React, { Component } from 'react';
import PropTypes from 'prop-types'; //kuerzel impt

export class Navbar extends Component {
  // default props are used if you don't have the prop passed to the class
  //defining a default props
  static defaultProps = {
    title: 'User Search'
  };
  // defining the type of my props
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon}></i>
          {this.props.title}
        </h1>
        {/* props are the properties constructed */}
      </nav>
    );
  }
}

export default Navbar;
