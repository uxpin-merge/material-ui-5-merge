import * as React from 'react';
import PropTypes from 'prop-types';
import ToggleButtonGroupM from '@mui/material/ToggleButtonGroup';

function ToggleButtonGroup(props) {
  return (
    <ToggleButtonGroupM {...props}>
      {props.children}
    </ToggleButtonGroupM>
  )
}

ToggleButtonGroup.propTypes = {
  /**
   * The content of the component.
   * @uxpinignoreprop
   * */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The color of the button whhen it is in an active state.
   */
  color: PropTypes.oneOf(['standard', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),

  /**
   * If true, the component is disabled.
   * @uxpincontroltype
   */
  disabled: PropTypes.bool,

  /**
   * If true, only allow one of the child ToggleButton values to be selected.
   */
  exclusive: PropTypes.bool,

  /**
   * If true, the button group will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * @uxpinignoreprop
   */
  onChange: PropTypes.func,

  /**
   * The component orientation (layout flow direction).
  */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  /**
   * The value to associate with the button when selected in a ToggleButtonGroup.
   */
  value: PropTypes.node,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * @uxpinignoreprop
   */
  sx: PropTypes.object,
}

export default ToggleButtonGroup;
