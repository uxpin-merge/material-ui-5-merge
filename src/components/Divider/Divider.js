import React from "react";
import PropTypes from "prop-types";
import DividerM from '@mui/material/Divider';


/**
 * @uxpindocurl https://mui.com/api/divider/
 */
function Divider(props) {
  return <DividerM {...props} />;
}

Divider.propTypes = {
  /**
   * Absolutely position the element.
    * @uxpinignoreprop
   */
  absolute: PropTypes.bool,

  /**
   * The content of the component.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * @uxpinignoreprop
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If true, a vertical divider will have the correct height when used in flex container. 
   * (By default, a vertical divider will have a calculated height of 0px if it is the child of a flex container.)
   */
  flexItem: PropTypes.bool,

  /**
   * If true, the divider will have a lighter color.
   * @uxpinignoreprop
   */
  light: PropTypes.bool,

  /**
   * The component orientation.
   * If using "vertical" items and divider must reside within a Stack or Grid container
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * The text alignment.
   */
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['fullWidth', 'inset', 'middle']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
}

export default Divider;


