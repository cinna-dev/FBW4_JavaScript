import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

const FormUserDetails = ({ values, handleChange, nextStep }) => {
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
          onClick={nextStep}
        />
      </React.Fragment>
    </MuiThemeProvider>
  );
};

FormUserDetails.prototype = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired
};

const style = {
  button: {
    maargin: 15
  }
};

export default FormUserDetails;
