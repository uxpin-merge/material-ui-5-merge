import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box/Box';
import { Stepper as StepperM  } from '@mui/material';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';


/**
 * @uxpindocurl https://mui.com/components/steppers/#main-content
 */
function Stepper(props) {

  const steps = [
    { 
        label: 'Select campaign settings'
    },
    { 
        label: 'Create an ad group'
    },
    { 
        label: 'Create an ad'
    },
]

  
  const [activeStep, setActiveStep] = React.useState(props.activeStep);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <StepperM {...props} activeStep={activeStep} 
        orientation={props.orientation}
        alternativeLabel={props.orientation === 'horizontal' ? props.alternativeLabel : null}
        nonLinear={props.nonLinear}
        >
        {steps.map((step, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={step.label} {...stepProps}>
              <StepLabel {...labelProps}>{step.label}</StepLabel>
            </Step>
          );
        })}

      </StepperM>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} > </ Box>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} > </Box>
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}



Stepper.propTypes = {
  /**
   *  Two or more <Step /> components.
   */
  /** @uxpinignoreprop */
  children: PropTypes.node,
  
  /**
   * Set the active step (zero based index). Set to -1 to disable all the steps.
   */
  activeStep: PropTypes.number,

  /**
   * The component orientation (layout flow direction).
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * If set to 'true' and orientation is horizontal, then the step label will be positioned under the icon.  
   */
  /** @uxpinpropname label position */
  alternativeLabel: PropTypes.bool,

  /** 
   * If set the Stepper will not assist in controlling steps for linear flow.
   */
  /** @uxpinignoreprop */
  nonLinear: PropTypes.bool,
  
 /**
  * Override or extend the styles applied to the component. See CSS API for more details.
  * https://mui.com/api/stepper/#css
  */
 /** @uxpinignoreprop */
 classes: PropTypes.object,
 
 /**
  * An element to be placed between each step.
  */
 /** @uxpinignoreprop */
 connector: PropTypes.element,

 /**
  * The system prop that allows defining system overrides as well as additional CSS styles. 
  * See the `sx` https://mui.com/system/the-sx-prop/ page for more details.
  */
 sx: PropTypes.object,
}

export default Stepper;