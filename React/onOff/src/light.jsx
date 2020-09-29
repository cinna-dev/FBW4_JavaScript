import React, { Component } from 'react';
import lightOff from './pic_bulboff.gif';
import lightOn from './pic_bulbon.gif';

class Light extends Component {
  state = {
    isToggleOn: false
  };
  changeImage = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };
  render() {
    return (
      <img
        width='100'
        height='180'
        onClick={this.changeImage}
        src={this.state.isToggleOn ? lightOn : lightOff}
      ></img>
    );
  }
}

export default Light;
