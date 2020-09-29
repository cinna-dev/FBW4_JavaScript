import React from 'react';
import ReactSpinner from 'react-bootstrap/Spinner';
const Spinner = () => {
  return (
    <div>
      <ReactSpinner
        animation='border'
        role='status'
        size='lg'
        variant='primary'
      >
        <span className='sr-only'>Loading...</span>
      </ReactSpinner>
    </div>
  );
};

export default Spinner;
