import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  }
}));

function getSteps() {
  return [
    'Enter User Details',
    'Enter Personal Details',
    'Confirm Your Details',
    'Success'
  ];
}

const HorizontalLabelPositionBelowStepper = props => {
  const classes = useStyles();
  const steps = getSteps(props.step);

  return (
    <div className={classes.root}>
      <Stepper activeStep={props.step} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

HorizontalLabelPositionBelowStepper.prototype = {
  step: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  step: state.register.step
});

export default connect(mapStateToProps)(HorizontalLabelPositionBelowStepper);
