import React from "react";
import PropTypes from "prop-types";
import FormControlLabelM from "@mui/material/FormControlLabel";

/**
 * @uxpindocurl https://mui.com/api/form-control-label/#main-content
 */
function FormControlLabel(props) {
    return <FormControlLabelM {...props}>{props.children}</FormControlLabelM>;
  }

FormControlLabel.propTypes = {
    /**
   * If `true`, the component appears selected.
   */
  checked: PropTypes.bool,

  /**
   * @uxpinignoreprop 
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: PropTypes.element,

  /**
   * If `true`, the control will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * If 'true', the label is rendered as it is passed without an additional typography node.
   */
  disableTypography: PropTypes.bool,



  /**
   * @uxpinignoreprop 
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * The text to be used in an enclosing label element.
   */
  label: PropTypes.node,

  /**
   * The position of the label.
   */
  labelPlacement: PropTypes.oneOf(['end', 'start', 'top', 'bottom']),

  /**
   * @uxpinignoreprop 
   * @ignore
   */
  muiFormControl: PropTypes.object,

  /*
   * @ignore
   */
  name: PropTypes.string,

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: PropTypes.func,

  /**
   * @uxpinignoreprop 
   * The value of the component.
   */
  value: PropTypes.string,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
   * https://mui.com/system/the-sx-prop/
   */
  /** */
  sx: PropTypes.object,
};

export default FormControlLabel;
  