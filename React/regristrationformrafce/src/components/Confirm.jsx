import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

const Confirm = ({
  values: { firstName, lastName, email, occupation, city, bio },
  prevStep,
  nextStep
}) => {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title='Confirm Your Details' />
        <List>
          <ListItem primaryText='First Name' secondaryText={firstName} />
          <ListItem primaryText='Last Name' secondaryText={lastName} />
          <ListItem primaryText='Email' secondaryText={email} />
          <ListItem primaryText='Occupation' secondaryText={occupation} />
          <ListItem primaryText='City' secondaryText={city} />
          <ListItem primaryText='Bio' secondaryText={bio} />
        </List>
        <br />
        <br />
        <RaisedButton
          label='Confirm'
          primary={true}
          variant='contained' // similar to style
          //style={style.button}
          onClick={nextStep}
        />
        <RaisedButton
          label='Back'
          primary={false}
          variant='contained' // similar to style
          //style={style.button}
          onClick={prevStep}
        />
      </React.Fragment>
    </MuiThemeProvider>
  );
};

Confirm.prototype = {
  values: PropTypes.object.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired
};

/* const style = {
  button: {
    maargin: 15
  }
}; */

export default Confirm;
