import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { nextStep } from '../../actions/registerAction';
import { prevStep } from '../../actions/registerAction';
import { setRegister } from '../../actions/registerAction';
import PropTypes from 'prop-types';

const FormPersonalDetails = props => {
  const { occupation, city, bio } = props;

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title='Enter Personal Details' />
        <Container>
          <TextField
            hintText='Enter Your Occupation' //placeHolder
            floatingLabelText='Occupation' // label
            onChange={e => props.setRegister('occupation', e)}
            defaultValue={occupation}
          />
          <br />
          <TextField
            hintText='Enter Your City' //placeHolder
            floatingLabelText='City' // label
            onChange={e => props.setRegister('city', e)}
            defaultValue={city}
          />
          <br />
          <TextField
            hintText='Enter Your Bio' //placeHolder
            floatingLabelText='Bio' // label
            onChange={e => props.setRegister('bio', e)}
            defaultValue={bio}
          />
          <br />
          <RaisedButton
            label='Continue'
            color='primary'
            style={style.button}
            onClick={props.nextStep}
          />
          <RaisedButton
            label='Back'
            color='secondary'
            style={style.button}
            onClick={props.prevStep}
          />
        </Container>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

const style = {
  button: {
    margin: 15
  }
};

FormPersonalDetails.prototype = {
  step: PropTypes.number.isRequired,
  occupation: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  step: state.register.step,
  occupation: state.register.occupation,
  city: state.register.city,
  bio: state.register.bio
});

export default connect(mapStateToProps, { nextStep, prevStep, setRegister })(
  FormPersonalDetails
);
