import React, { Component } from 'react';
import lightOff from './pic_bulboff.gif';
import lightOn from './pic_bulbon.gif';

function Light(props) {
  return (
    <img width='100' height='180' src={props.light ? lightOn : lightOff}></img>
  );
}

export default Light;
