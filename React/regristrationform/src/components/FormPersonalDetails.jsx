import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
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
            onClick={this.continue}
          />
          <RaisedButton
            label='Back'
            color='secondary'
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

export default FormPersonalDetails;
