import React, { Component } from 'react';

class TitleHeader extends Component {
  state = { title: '' };
  //hook
  // predefined function getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log('sync state with props');
    console.log('current state ', state.title);
    console.log('new props', props.newTitle);
    if (state.title !== props.newTitle) {
      return { title: props.newTitle }; //return new state object
    } else {
      return null;
    }
  }
  // fill Component with data when component got mounted
  componentDidMount() {
    console.log('compnent did mount');
    let header = document.querySelector('h1');
    header.style.background = 'yellow';
  }

  // unmount will hide the object
  componentWillUnmount() {
    console.log('compenent will unmount');
    alert('compenent will unmount');
    this.setState({ title: '' });
  }

  // will go into effect when updated
  componentDidUpdate() {
    console.log('compnent did update');
    let header = document.querySelector('h1');
    header.style.background = 'green';
  }
  render() {
    console.log('compnent is rendered', this.state.tilte);
    return <h1>{this.state.title}</h1>;
  }
}

export default TitleHeader;
