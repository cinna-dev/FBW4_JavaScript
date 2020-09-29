import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { nextStep } from '../../actions/registerAction';
import { setRegister } from '../../actions/registerAction';
import PropTypes from 'prop-types';

const FormUserDetails = props => {
  const { firstName, lastName, email } = props;

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title='Enter User Details' />
        <Container>
          <TextField
            hintText='Enter Your First Name' //placeHolder
            floatingLabelText='First Name' // label
            onChange={e => props.setRegister('firstName', e)}
            defaultValue={firstName}
          />
          <br />
          <TextField
            hintText='Enter Your Last Name' //placeHolder
            floatingLabelText='Last Name' // label
            onChange={e => props.setRegister('lastName', e)}
            defaultValue={lastName}
          />
          <br />
          <TextField
            hintText='Enter Your Email' //placeHolder
            floatingLabelText='Email' // label
            onChange={e => props.setRegister('email', e)}
            defaultValue={email}
          />
          <br />
          <RaisedButton
            label='Continue'
            color='primary'
            style={style.button}
            onClick={props.nextStep}
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

FormUserDetails.prototype = {
  step: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  step: state.register.step,
  firstName: state.register.firstName,
  lastName: state.register.lastName,
  email: state.register.email
});

export default connect(mapStateToProps, { nextStep, setRegister })(
  FormUserDetails
);
