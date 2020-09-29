import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

const Snackbars = ({ alert }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  //alert !== null ? handleClick() : null;
  return (
    alert !== null && (
      <div className={classes.root}>
        {/*   <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}> */}
        <Alert onClose={handleClose} severity={alert.type}>
          {alert.msg}
        </Alert>
        {/*  </Snackbar> */}
      </div>
    )
  );
};

export default Snackbars;
