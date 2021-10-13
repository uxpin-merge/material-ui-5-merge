import React from "react";
import PropTypes from "prop-types";
import AccordionSummaryM from '@mui/material/AccordionSummary';
import Icon from '../Icon/Icon';

function AccordionSummary(props) {
    return (
        <AccordionSummaryM {...props} expandIcon={<Icon>{props.icon}</Icon>}>{props.children}</AccordionSummaryM>
    )
} 

AccordionSummary.propTypes = {
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
   * The icon to display as the expand indicator.
   * Icon prop is used to improve Merge usability.
   * @uxpinignoreprop
   */
  expandedIcon: PropTypes.node,

  /**
   * Custome Prop.
   * The icon to display as the expand indicator.
   */
  icon: PropTypes.string,

  /**
   * This prop can help identify which element has keyboard focus. The class name will be applied when the element gains the focus through keyboard interaction. 
   */
  focusVisibleClassName: PropTypes.string,
  
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * @uxpinignoreprop
   */
  sx: PropTypes.object
}

export default AccordionSummary;