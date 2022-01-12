import * as React from 'react';
import PropTypes from "prop-types";
import TooltipM from '@mui/material/Tooltip';

/**
 * @uxpindocurl https://mui.com/api/tooltip/
 */
function Tooltip(props) {
  return (
      <TooltipM {...props} PopperProps={{ keepMounted: true, disablePortal: true }}>
        <div>{props.children}</div>
      </TooltipM>
  );
}

Tooltip.propTypes = {
  /**
   * If 'true', adds an arrow to the tooltip.
   * @uxpinpropname  Tooltip Border Arrow
   */  
  arrow: PropTypes.bool, 

  /**
   * Elements contained by Tooltip.
   * @uxpinignoreprop 
   */
  children: PropTypes.node,

  /**
   * Callback fired when the tooltip requests to be closed.
   *
   * @param {object} event The event source of the callback
   * @uxpinignoreprop
   */
  onClose: PropTypes.func,

  /**
   * Callback fired when the tooltip requests to be open.
   *
   * @param {object} event The event source of the callback
   * @uxpinignoreprop
   */
  onOpen: PropTypes.func,

  /**
   * If `true`, the tooltip is shown.
   * @uxpinignoreprop
   */
  open: PropTypes.bool,

  /**
   * Where the Tooltip should display in relation to its nested element.
   */
  placement: PropTypes.oneOf([
    "bottom-end",
    "bottom-start",
    "bottom",
    "left-end",
    "left-start",
    "left",
    "right-end",
    "right-start",
    "right",
    "top-end",
    "top-start",
    "top"
  ]),

  /**
   * Text to display in the Tooltip.
   * @uxpinpropname  Tooltip Text
   */
  title: PropTypes.string, 

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
}

export default Tooltip;