import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { setAlert } from '../../../actions/userSearchAction';
import PropTypes from 'prop-types';

//import Slide from '@material-ui/core/Slide';

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

const Snackbars = props => {
  const classes = useStyles();

  return (
    props.alert !== null && (
      <div className={classes.root}>
        <Snackbar
          open={props.alertBool}
          autoHideDuration={6000}
          onClose={() => props.setAlert(null, false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          /* TransitionComponent={<Slide direction='up' />} */
        >
          <Alert
            onClose={() => props.setAlert(null, false)}
            severity={props.alert.type}
          >
            {props.alert.msg}
          </Alert>
        </Snackbar>
      </div>
    )
  );
};

Snackbars.prototype = {
  alert: PropTypes.object.isRequired,
  alertBool: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  alert: state.users.alert,
  alertBool: state.users.alertBool
});

export default connect(mapStateToProps, {
  setAlert
})(Snackbars);
