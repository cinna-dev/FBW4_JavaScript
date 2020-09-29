import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Home from './Home';
import Box from '@material-ui/core/Box';

const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
};

const Navbar = ({ value, handleChange }) => {
  return (
    <>
      <AppBar position='static' title='CatsStore'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab value='one' label='Home' {...a11yProps(0)} />

          <Tab value='two' label='Products' {...a11yProps(1)} />

          <Tab value='three' label='Cart' {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </>
  );
};

export default Navbar;
