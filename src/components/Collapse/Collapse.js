import React from "react";
import PropTypes from "prop-types";
import CollapseM from "@mui/material/Collapse";

function Collapse(props) {
  return <CollapseM {...props}>{props.children}</CollapseM>;
}

Collapse.propTypes = {
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM node and a done callback. 
   * Allows for more fine grained transition end logic. 
   * Note: Timeouts are still used as a fallback if provided.
   */
  /** @uxpinignoreprop */
  addEndListener: PropTypes.func,

  /**
   * The content node to be collapsed.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * Override or extend the styles applied to the component. 
   * See CSS API below for more details.
   * @uxpinignoreprop
   */
  className: PropTypes.string,

  /**
   * The width (horizontal) or height (vertical) of the container when collapsed.
   */
  collapsedSize: PropTypes.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.node,

  /**
   * If `true`, the component will transition in.
   * @uxpinpropname Visible 
   */
  in: PropTypes.bool,

  /**
   * The transition orientation.
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: PropTypes.oneOfType([
    PropTypes.number, 
    PropTypes.shape({enter: PropTypes.number, exit: PropTypes.number}), 
    PropTypes.oneOf(['auto'])
  ]),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. 
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
   */
  sx: PropTypes.object,
  };
   
   export default Collapse;