import React, { Fragment, Component } from 'react';
import './App.css';
import Light from './light3.jsx';
//import
// Fragment import // dummy div
// props == messages
// StateFull Component == Class Component
class App extends Component {
  //  constructor(props) {
  //  super(props);
  //  this.state = { isToggleOn: true };
  // }
  state = { show: true, isToggleOn: true };
  //method this will not refere to the class// needs to be an arrow function
  changeToggle = () => {
    this.setState(prevState => ({
      // prevState is allways the current state that will be replaced
      // only mentionn the one state you want to change
      isToggleOn: !prevState.isToggleOn
    }));
  };
  showHideHandler() {
    this.setState(currentState => ({
      show: !currentState.show
    }));
  }
  render() {
    return (
      <Fragment /* className='App' */>
        {this.state.show ? <Light light={this.state.isToggleOn} /> : null}
        <br />
        <button onClick={this.changeToggle}>
          {this.state.isToggleOn ? 'ON' : 'Off'}
        </button>
        <button id='hide' onClick={() => this.showHideHandler()}>
          hide
        </button>
      </Fragment>
    ); //of<>hello world</> ;
  }
}

export default App;
