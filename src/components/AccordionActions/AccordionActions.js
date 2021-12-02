import React from "react";
import PropTypes from "prop-types";
import AccordionActionsM from '@mui/material/AccordionActions';


/**
 * @upxindocurl https://mui.com/api/accordion-actions/
 */
function AccordionActions(props) {
    return (
        <AccordionActionsM {...props}>{props.children}</AccordionActionsM>
    )
} 

AccordionActions.propTypes = {
  /**
   * The content of the component.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * If true, the actions do not have additional margin.
   */
  disableSpacing: PropTypes.bool.prototype,
  
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * 
   */
  sx: PropTypes.object
}

export default AccordionActions;