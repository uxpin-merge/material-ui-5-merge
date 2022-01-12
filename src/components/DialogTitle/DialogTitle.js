import React from "react";
import DialogTitleM from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import IconButton from '../IconButton/IconButton';

/**
 * @uxpindocurl https://mui.com/api/dialog-title/
 */
function DialogTitle(props) {
  return (
    <DialogTitleM {...props}>
      {props.children}
      {props.hasClose ? (
        <IconButton
          aria-label="close"
          onClick={props.onClick}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          close
        </IconButton>
      ) : null
      }
    </DialogTitleM>
  )
}

DialogTitle.propTypes = {
  /**
   * The text of the Dialog Title.
   */
  children: PropTypes.node,

  /**
   * If true, the close icon will be shown.
   */
  hasClose: PropTypes.bool,

  /**
   * on click event to use with UXPin interactions.
   */
  onClick: PropTypes.func,

  /**
   * Override or extend the styles applied to the component. 
   * See CSS API below for more details. https://mui.com/api/dialog-title/#css
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. 
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
   */
  sx: PropTypes.object,
};

export default DialogTitle;