import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Fade } from 'react-bootstrap';
//props.alert
const Alerts = ({ alert: { show, msg, type } }) => {
  return (
    <Alert show={show} variant={type} transition={Fade}>
      {msg}
    </Alert>
  );
};

export default Alerts;
