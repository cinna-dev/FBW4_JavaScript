import React from 'react';

const Input = props => {
  return (
    <form action=''>
      <input onChange={e => props.sendBack(e)} name='email' type='text' />
      <input onChange={e => props.sendBack(e)} name='password' type='text' />
    </form>
  );
};

export default Input;
