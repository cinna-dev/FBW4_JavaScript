import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs, Tab, Paper } from '@material-ui/core';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MuiThemeProvider>
      <Paper className={classes.root}>
        <Tabs
          variant='fullWidth'
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
          indicatorColor='primary'
          textColor='primary'
        >
          <Tab component={Link} to='/' label='Registration' {...a11yProps(0)} />
          <Tab
            component={Link}
            to='usersearch'
            label='UserSearch'
            {...a11yProps(1)}
          />
        </Tabs>
      </Paper>
    </MuiThemeProvider>
  );
};

export default NavBar;
