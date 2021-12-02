import React from "react";
import PropTypes from "prop-types";
import FormHelperTextM from "@mui/material/FormHelperText";

/**
 * @uxpindocurl https://mui.com/api/form-helper-text/
 */
function FormHelperText(props) {
  return <FormHelperTextM {...props}>{props.children}</FormHelperTextM>;
}

FormHelperText.propTypes = {
 /**
     * @uxpinignoreprop 
     * The content of the component.
     */
  children: PropTypes.node,
  
  /**
   * @uxpinignoreprop 
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

    /**
   * @uxpinignoreprop 
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.node,

  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: PropTypes.bool,

  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: PropTypes.bool,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes.oneOf(["dense"]),

  /**
   * If `true`, the helper text should use required classes key.
   */
  required: PropTypes.bool,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["standard", "outlined", "filled"]),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. 
   * See the `sx` page for more details https://mui.com/system/the-sx-prop/.
   */
  /** */
  sx: PropTypes.object,
  

}

export default FormHelperText;