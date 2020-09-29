import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

const FormPersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title='Enter Personal Details' />
        <TextField
          hintText='Enter Your Occupation' //placeholder
          floatingLabelText='Occupation' //lable
          onChange={handleChange('occupation')}
          defaultValue={values.occupation} //value
        />
        <br />
        <TextField
          hintText='Enter Your City' //placeholder
          floatingLabelText='City' //lable
          onChange={handleChange('city')}
          defaultValue={values.city} //value
        />
        <br />
        <TextField
          hintText='Enter Your Bio' //placeholder
          floatingLabelText='Bio' //lable
          onChange={handleChange('bio')}
          defaultValue={values.bio} //value
        />
        <br />
        <RaisedButton
          label='Continue'
          color='primary'
          style={style.button}
          onClick={nextStep}
        />
        <RaisedButton
          label='Back'
          color='secondary'
          style={style.button}
          onClick={prevStep}
        />
      </React.Fragment>
    </MuiThemeProvider>
  );
};

FormPersonalDetails.prototype = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired
};

const style = {
  button: {
    maargin: 15
  }
};

export default FormPersonalDetails;
