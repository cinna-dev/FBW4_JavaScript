import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

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

const HorizontalLabelPositionBelowStepper = ({ sendStep }) => {
  console.log(sendStep);
  const classes = useStyles();
  const steps = getSteps(sendStep);

  return (
    <div className={classes.root}>
      <Stepper activeStep={sendStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default HorizontalLabelPositionBelowStepper;
