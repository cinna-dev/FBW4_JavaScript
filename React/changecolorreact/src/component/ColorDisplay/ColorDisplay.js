import React, { Component } from 'react';

class ColorDisplay extends Component {
  state = {
    inputValue: ''
  };
  changeColor(ev) {
    this.setState({ inputValue: ev.target.value });
  }
  render() {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <input
            id='colorInput'
            type='text'
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '2rem',
              marginBottom: '2rem',
              borderRadius: '10px',
              textAlign: 'center',
              fontSize: '32px'
            }}
            placeholder='insert Color'
            onChange={e => {
              this.changeColor(e);
            }}
          />
        </div>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              height: '400px',
              width: '500px',
              borderRadius: '20px',
              border: '2px solid black',
              backgroundColor: this.state.inputValue
            }}
            className='colorDiv'
          ></div>
        </div>
      </div>
    );
  }
}

export default ColorDisplay;
