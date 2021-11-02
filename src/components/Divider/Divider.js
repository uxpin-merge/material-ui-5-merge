import React from "react";
import PropTypes from "prop-types";
import DividerM from '@mui/material/Divider';

function Divider(props) {
  return <DividerM {...props} defaultChecked/>;
}

Divider.propTypes = {
  /**
   * Absolutely position the element.
    * @uxpinignoreprop
   */
  absolute: PropTypes.bool,

  /**
   * The content of the component.
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
  * @uxpinignoreprop
   */
  flexItem: PropTypes.bool,

  /**
   * If true, the divider will have a lighter color.
   * @uxpinignoreprop
   */
  light: PropTypes.bool,

  /**
   * The component orientation.
   * @uxpinignoreprop
   */
  orientation: PropTypes.oneOf(['horizontal', ' vertical']),

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