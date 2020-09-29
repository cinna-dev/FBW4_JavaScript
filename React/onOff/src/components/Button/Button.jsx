import React, { Component } from 'react';
//functional Component has no state
function Button(props) {
  if (props == 'off') {
    return <button onClick={changeState}>Off</button>;
  } else {
    return <button onClick={changeState}>On</button>;
  }
}

export default Button;
