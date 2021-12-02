import React from "react";
import DialogTitleM from "@mui/material/DialogTitle";
import PropTypes from "prop-types";

/**
 * @uxpindocurl https://mui.com/api/dialog-title/
 */
function DialogTitle(props) {
  return <DialogTitleM {...props}>{props.children}</DialogTitleM>;
}

DialogTitle.propTypes = {
  /**
   * The text of the Dialog Title.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component. 
   * See CSS API below for more details. https://mui.com/api/dialog-title/#css
   */
  classes: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. 
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
   */
  sx: PropTypes.object,
};

export default DialogTitle;