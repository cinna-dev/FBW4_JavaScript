import React, { Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Container from '@material-ui/core/Container';

const Success = () => {
  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title='Success' />
        <Container>
          <h1>Thank you for your submission</h1>
          <p>You will get an email with futher instructions</p>
        </Container>
      </Fragment>
    </MuiThemeProvider>
  );
};

export default Success;
