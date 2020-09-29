import React from 'react';

const Landing = ({ header, backgroundImage }) => {
  const height = window.innerHeight - 64 + 'px';
  const landingStyle = {
    width: '100vw',
    height,
    backgroundImage: 'url(' + backgroundImage + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div style={landingStyle}>
      <h1 className='pt-5'>{header}</h1>
    </div>
  );
};

export default Landing;
