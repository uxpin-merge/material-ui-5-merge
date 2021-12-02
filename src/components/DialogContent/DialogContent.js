import React from "react";
import DialogContentM from "@mui/material/DialogContent";
import PropTypes from "prop-types";

/**
 * @uxpindocurl https://mui.com/api/dialog-content/
 */
function DialogContent(props) {
  return <DialogContentM {...props}>{props.children}</DialogContentM>;
}

DialogContent.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * Display the top and bottom dividers.
   */
  dividers: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. 
   * See the `sx` page for more details https://mui.com/system/the-sx-prop/.
   */
  sx: PropTypes.object,

  /**
   * Override or extend the styles applied to the component. See CSS API below for more details..
   */
  classes: PropTypes.object,
};

export default DialogContent;