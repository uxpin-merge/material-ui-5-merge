import React from "react";
import PropTypes from "prop-types";
import InputLabelM from "@mui/material/InputLabel";


/**
 * @uxpindocurl https://mui.com/api/input-label/#main-content
 */
function InputLabel(props) {
  return <InputLabelM {...props}>{props.children}</InputLabelM>;
}

InputLabel.propTypes = {
    /**
   * @uxpinignoreprop 
   * The contents of the `InputLabel`.
   */
  children: PropTypes.node,

  /**
   * @uxpinignoreprop 
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object.isRequired,

  /**
   * If `true`, the transition animation is disabled.
   */
   disableAnimation: PropTypes.bool,

   /**
    * If `true`, apply disabled class.
    */
   disabled: PropTypes.bool,
 
   /**
    * If `true`, the label will be displayed in an error state.
    */
   error: PropTypes.bool,
 
   /**
    * If `true`, the input of this label is focused.
    */
   focused: PropTypes.bool,
 
   /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes.oneOf(["dense"]),

  /**
   * if `true`, the label will indicate that the input is required.
   */
   required: PropTypes.bool,

   /**
    * If `true`, the label is shrunk.
    */
   shrink: PropTypes.bool,
 
   /**
    * The variant to use.
    */
   variant: PropTypes.oneOf(["standard", "outlined", "filled"]),

   /**
    * The system prop that allows defining system overrides as well as additional CSS styles.
    * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
    */
   sx: PropTypes.object,

}

export default InputLabel;