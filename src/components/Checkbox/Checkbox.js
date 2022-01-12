import React from "react";
import PropTypes from "prop-types";
import CheckboxM from '@mui/material/Checkbox';


/**
 * @uxpindocurl https://mui.com/api/checkbox/
 */
function Checkbox(props) {
  return <CheckboxM {...props} defaultChecked/>;
}

Checkbox.propTypes = {
  /**
   * If `true`, the component is checked.
   * @uxpinbind onChange 1
   */
  checked: PropTypes.bool,

  /**
   * @uxpinignoreprop
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node,

  /**
   * @uxpinignoreprop
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'error',
    'success',
    'warning',
  ]),

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Callback fired when the state is changed.
   */
  onChange: PropTypes.func,

  /**
   * If true, the input element is required.
   */
  required: PropTypes.bool,

  /**
   * The size of the component. small is equivalent to the dense checkbox styling.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * The value of the component.
   */
  value: PropTypes.string,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
}

Checkbox.defaultProps = {
  // NOTE: Checked must be controlled state from the outset, otherwise changing state in the app will trigger an error
  // see: https://fb.me/react-controlled-components
  checked: false,
};

export default Checkbox;