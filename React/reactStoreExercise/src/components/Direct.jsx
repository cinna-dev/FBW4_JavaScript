import React from 'react';
import Home from './Home';
import Products from './Products.jsx';
import Cart from './Cart';

const Direct = ({ value, products }) => {
  switch (value) {
    case 'one':
      return <Home />;
    case 'two':
      return <Products products={products} />;
    case 'three':
      return <Cart />;
    default:
      return null;
  }
};

export default Direct;
