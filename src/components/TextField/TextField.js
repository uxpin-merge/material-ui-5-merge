import React from "react";
import PropTypes from "prop-types";
import TextFieldM from "@mui/material/TextField";

/**
 * @uxpindocurl https://mui.com/api/text-field/
 */
function TextField(props) {
  return (
    <TextFieldM {...props} />
  )
}

TextField.propTypes = {
  /**
   * The label content.
   */
  label: PropTypes.string,

  /**
 * The helper text content.
 */
  helperText: PropTypes.string,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: PropTypes.string,

  /**
   * The value of the `Input` element, required for a controlled component.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
      ])
    )
  ]),

  /**
   * This prop helps users to fill forms faster, especially on mobile devices. 
   * The name can be confusing, as it's more like an autofill. 
   * You can learn more about it: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill.
   */
  /** @uxpinignoreprop */
  autoComplete: PropTypes.string,

  /**
   * Override or extend the styles applied to the component. See CSS API: https://mui.com/api/text-field/#css.
   */
  /** @uxpinignoreprop */
  classes: PropTypes.object,

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(["standard", "outlined", "filled"]),

  /**The size of the component */
  size: PropTypes.oneOf(['small', 'medium']),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'info', 'success', 'warning']),

  /**
 * If 'dense' or 'normal', will adjust vertical spacing of this and contained components.
 */
  margin: PropTypes.oneOf(['dense', 'none', 'normal']),

  /** The default value. Use when the component is not controlled.*/
  /** @uxpinignoreprop */
  defaultValue: PropTypes.string,

  /** If 'true', the component is disabled.*/
  disabled: PropTypes.bool,

  /**
 * If `true`, the label is displayed as required and the input will be required.
 */
  required: PropTypes.bool,

  /** If 'true', the label is displayed in an error state.*/
  error: PropTypes.bool,

  /**
   * If 'true', the input will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
 * If 'true', the input element is focused during the first mount.
 */
  autoFocus: PropTypes.bool,

  /**
   * The id of the input element. Use this prop to make label and helperText accessible for screen readers.
   */
  /** @uxpinignoreprop */
  id: PropTypes.string,

  /**
   * If true, a textarea element is rendered instead of an input.
   */
  multiline: PropTypes.bool,

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: PropTypes.number,

  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: PropTypes.number,

  /**
   * @uxpinignoreprop
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: PropTypes.number,

  /**
   * Render a 'Select' element while passing the Input element to 'Select' as 'input' parameter. 
   * If this option is set you must pass the options of the select as children.
   */
  /** @uxpinignoreprop */
  select: PropTypes.bool,

  /** @uxpinignoreprop */
  SelectProps: PropTypes.object,

  /**
* Callback fired when the value is changed.
*/
  onChange: PropTypes.func,

  /** The system prop that allows defining 
   * system overrides as well as additional CSS styles. 
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/ */
  sx: PropTypes.object
};

export default TextField;