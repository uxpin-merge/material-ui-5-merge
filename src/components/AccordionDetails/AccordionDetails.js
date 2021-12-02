import React from "react";
import PropTypes from "prop-types";
import AccordionDetailsM from '@mui/material/AccordionDetails';


/**
 * @upxindocurl https://mui.com/api/accordion-details/
 */
function AccordionDetails(props) {
    return (
        <AccordionDetailsM {...props}>{props.children}</AccordionDetailsM>
    )
} 

AccordionDetails.propTypes = {
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * 
   */
  sx: PropTypes.object
}

export default AccordionDetails;