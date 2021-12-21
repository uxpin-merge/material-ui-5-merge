import React from "react";
import PropTypes from "prop-types";
import { Backdrop as BackdropM } from "@mui/material";

function Backdrop(props) {
  return <BackdropM {...props}>{props.children}</BackdropM>;
}

Backdrop.propTypes = {
  /**
   * If true, the component is shown.  
   */  
  open: PropTypes.bool,
  
  /**
   * The content of the component.
   */
  /**
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component. See CSS API for more details.
   * https://mui.com/api/backdrop/#css
   */
  /**
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  /**
   * @uxpinignoreprop
   */
  component: PropTypes.elementType,

  /**
   * The components used for each slot inside the Backdrop. Either a string to use a HTML element or a component.
   */
  /**
   * @uxpinignoreprop
   */
  components: PropTypes.elementType,

  /**
   * The props used for each slot inside the Backdrop.
   */
  /**
   * @uxpinignoreprop
   */
  componentsProps: PropTypes.object,

  /**
   * If true, the backdrop is invisible. It can be used when rendering a popover or a custom select component.
   */
  invisible: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. https://mui.com/system/the-sx-prop/
   */
  sx: PropTypes.object,

  /**
   * The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.
   */
   transitionDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      enter: PropTypes.number,
      exit: PropTypes.number
    })
  ])
};

export { Backdrop as default };
