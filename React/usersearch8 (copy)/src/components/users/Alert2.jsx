import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert, deleteHandler }) => {
  // get the key "alert" of props
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className={'fas fa-info-circle'} />
        {alert.msg}
        <a onClick={e => deleteHandler} href='#'>
          X
        </a>
      </div>
    )
  );
};

Alert.prototype = {
  alert: PropTypes.object.isRequired
};

export default Alert;
