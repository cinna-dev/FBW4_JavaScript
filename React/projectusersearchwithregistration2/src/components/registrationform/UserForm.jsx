import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails.jsx';
import FormPersonalDetails from './FormPersonalDetails.jsx';
import Confirm from './Confirm.jsx';
import Success from './Success.jsx';
import HorizontalLabelPositionBelowStepper from './HorizontalLabelPositionBelowStepper.jsx';
import { connect } from 'react-redux';
import { reSetRegister } from '../../actions/registerAction';
import PropTypes from 'prop-types';

class UserForm extends Component {
  static propTypes = {
    step: PropTypes.number.isRequired
  };

  componentWillUnmount() {
    this.props.reSetRegister();
  }

  render() {
    switch (this.props.step) {
      case 1:
        return (
          <>
            <FormUserDetails />
            <HorizontalLabelPositionBelowStepper />;
          </>
        );
      case 2:
        return (
          <>
            <FormPersonalDetails />
            <HorizontalLabelPositionBelowStepper />;
          </>
        );

      case 3:
        return (
          <>
            <Confirm />
            <HorizontalLabelPositionBelowStepper />;
          </>
        );

      case 4:
        return (
          <>
            <Success />
            <HorizontalLabelPositionBelowStepper />
          </>
        );
      default:
        return null;
    }
  }
}

const mapStateToProps = state => ({
  step: state.register.step
});

export default connect(mapStateToProps, { reSetRegister })(UserForm);
