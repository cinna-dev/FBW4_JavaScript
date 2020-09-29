import React from 'react';
import './App.css';
import Home from './components/home/Home.jsx';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Home />
      </div>
    </Provider>
  );
};

export default App;
