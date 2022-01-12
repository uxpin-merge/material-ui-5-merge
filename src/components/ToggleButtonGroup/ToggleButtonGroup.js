import * as React from 'react';
import ToggleButtonGroupM from '@mui/material/ToggleButtonGroup';
import PropTypes from 'prop-types';

/**
 * @uxpindocurl https://mui.com/api/toggle-button-group/
 */
export default function ToggleButtonGroup(props) {

  const [toggleValue, setToggleValue] = React.useState([props.value]);

  React.useEffect(() => {
    setToggleValue([props.value])
  }, [props.value]); // Only re-run the effect if value prop changes

  const handleChange = (event, newAlignment) => {
    setToggleValue(newAlignment);
  };

  return (
    <ToggleButtonGroupM
      {...props}
      value={toggleValue}
      onChange={handleChange}
      aria-label="toggle button"
    >
      {props.children}
    </ToggleButtonGroupM>


  );
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
 * The color of the button whhen it is in an active state.
 */
  color: PropTypes.oneOf(['standard', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),

  /**
   * The value to associate with the button when selected in a ToggleButtonGroup.
   */
  value: PropTypes.string,

  /**
 * If true, only allow one of the child ToggleButton values to be selected.
 */
  exclusive: PropTypes.bool,

  /**
 * If true, the component is disabled.
 * @uxpincontroltype
 */
  disabled: PropTypes.bool,

  /**
   * If true, the button group will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
}
