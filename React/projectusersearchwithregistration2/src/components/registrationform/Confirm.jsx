import React, { Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { nextStep } from '../../actions/registerAction';
import { prevStep } from '../../actions/registerAction';
import PropTypes from 'prop-types';

const Confirm = props => {
  const { firstName, lastName, email, occupation, city, bio } = props;
  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title='Confirm Your Details' />
        <Container>
          <List>
            <ListItem primaryText='First Name' secondaryText={firstName} />
            <ListItem primaryText='Last Name' secondaryText={lastName} />
            <ListItem primaryText='Email' secondaryText={email} />
            <ListItem primaryText='Occupation' secondaryText={occupation} />
            <ListItem primaryText='City' secondaryText={city} />
            <ListItem primaryText='Bio' secondaryText={bio} />
          </List>
          <br />
          <RaisedButton
            label='Confirm'
            primary={true}
            variant='contained'
            //style={style.button}
            onClick={props.nextStep}
          />
          <RaisedButton
            label='Back'
            primary={false}
            variant='contained'
            //style={style.button}
            onClick={props.prevStep}
          />
        </Container>
      </Fragment>
    </MuiThemeProvider>
  );
};

Confirm.prototype = {
  step: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  step: state.register.step,
  firstName: state.register.firstName,
  lastName: state.register.lastName,
  email: state.register.email,
  occupation: state.register.occupation,
  city: state.register.city,
  bio: state.register.bio
});

export default connect(mapStateToProps, { nextStep, prevStep })(Confirm);
