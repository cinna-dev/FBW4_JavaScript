import React from 'react';
import Landing from './Landing';

const Home = () => {
  return (
    <div>
      <Landing
        header={'Home'}
        backgroundImage={
          'https://www.techandgeek.com/wp-content/uploads/2017/03/autodesk-innovation-website-background-image-1-silent.jpg'
        }
      />
    </div>
  );
};

export default Home;
