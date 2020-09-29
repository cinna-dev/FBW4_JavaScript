import React, { Component } from 'react';
import lightOff from './pic_bulboff.gif';
import lightOn from './pic_bulbon.gif';

class Light extends Component {
  state = { lightOn: false };
  //hook
  static getDerivedStateFromProps(props, state) {
    //  first para is always props // second para is allways state
    console.log(props, state);
    if (props.light !== state.lightOn) {
      return { lightOn: props.light };
    } else {
      return null; // needs null return if condition is not met.
    }
  }
  //hoook
  componentDidMount() {
    document.querySelector(['img']).style.boxShadow = '0px 0px 20px black';
    //alert('compenent did mount');
  }
  //hoook
  componentDidUpdate() {
    document.querySelector(['img']).style.boxShadow = this.state.lightOn
      ? '0px 0px 20px yellow'
      : '0px 0px 20px black';
  }
  //hoook
  componentWillUnmount() {
    // finishe filecycle
    //alert('compenent will unmount');
    document.querySelector('#hide').innerHTML = 'show';
  }
  render() {
    return (
      <img
        width='100'
        height='180'
        src={this.state.lightOn ? lightOn : lightOff}
      ></img>
    );
  }
}

export default Light;
