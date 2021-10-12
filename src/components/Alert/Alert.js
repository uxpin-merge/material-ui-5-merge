import React from "react";
import PropTypes from "prop-types";
import AlertM from '@mui/material/Alert';

function Alert(props) {
    return (
        <AlertM {...props}>{props.children}</AlertM>
    )
} 

Alert.propTypes = {
  /**
   * The action to display. It renders after the message, at the end of the Alert.
   */
  action: PropTypes.node,

  /**
   * The content of the component.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * Override the default label for the close popup icon button.
   */
  closeText: PropTypes.string,

  /**
   * The main color for the alert. Unless provided, the value is taken from the severity prop.
   */
  color: PropTypes.oneOf(["success", "error", "info", "warning"]),

  /**
   * Override the icon displayed before the children. 
   * Unless provided, the icon is mapped to the value of the severity prop. Set to false to remove the icon.
   */
  icon: PropTypes.node,

  /**
   * The component maps the severity prop to a range of different icons, for instance success to <SuccessOutlined>. 
   * If you wish to change this mapping, you can provide your own. Alternatively, you can use the icon prop to override the icon displayed.
   */
  iconMapping: PropTypes.object,

  /**
   * Callback fired when the component requests to be closed. 
   * When provided and no action prop is set, a close icon button is displayed that triggers the callback when clicked.
   */
  onClose: PropTypes.func,

  /**
   * The ARIA role attribute of the element.
   */
  role: PropTypes.string,
  
  /**
   * The severity of the alert. This defines the color and icon used.
   */
  severity: PropTypes.oneOf(["success", "error", "info", "warning"]),

  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * @uxpinignoreprop
   */
  sx: PropTypes.object
}

export default Alert;