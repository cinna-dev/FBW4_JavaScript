import React from 'react';
import PropTypes from 'prop-types';

const Output = props => {
  return (
    <>
      <textarea
        name=''
        id=''
        cols='70'
        rows='2'
        value={`email:${props.email}  password: ${props.password}`}
      ></textarea>
    </>
  );
};

//PropTypes =
export default Output;
