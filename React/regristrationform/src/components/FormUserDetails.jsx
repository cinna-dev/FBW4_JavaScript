import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      //MuiThemeProvider needet for material-ui to work
      <MuiThemeProvider>
        {/* alternative way to declare a Fragment */}
        <React.Fragment>
          <AppBar title='Enter User Details' />
          <TextField
            hintText='Enter Your First Name' //placeholder
            floatingLabelText='First Name' //lable
            onChange={handleChange('firstName')}
            defaultValue={values.firstName} //value
          />
          <br />
          <TextField
            hintText='Enter Your Last Name' //placeholder
            floatingLabelText='Last Name' //lable
            onChange={handleChange('lastName')}
            defaultValue={values.lastName} //value
          />
          <br />
          <TextField
            hintText='Enter Your Email' //placeholder
            floatingLabelText='Email' //lable
            onChange={handleChange('email')}
            defaultValue={values.email} //value
          />
          <br />
          <RaisedButton
            label='Continue'
            color='primary'
            style={style.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const style = {
  button: {
    maargin: 15
  }
};

export default FormUserDetails;
