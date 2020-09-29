import React from 'react'; //racf
import spinnarImg from './spinner.gif';

const Spinner = () => {
  return (
    <img
      src={spinnarImg}
      alt='loading ...'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  );
};

export default Spinner;
