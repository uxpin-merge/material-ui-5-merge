import React from "react";
import PropTypes from "prop-types";
import AlertM from '@mui/material/Alert';
import IconButton from '../IconButton/IconButton';
import Icon from '../Icon/Icon';
import { iconVariants } from '../Icon/icon-variants'

function Alert(props) {
  let hasIcon = false;

  if (props.icon) {
    hasIcon = <Icon>{props.icon}</Icon>
  }

  return (
    <AlertM 
      {...props} 
      icon={hasIcon}
    >
      {props.children}
    </AlertM>
    )
} 

Alert.propTypes = {
  /**
   * Override the icon displayed before the children. 
   * Unless provided, the icon is mapped to the value of the severity prop. Set to false to remove the icon.
   */
  icon: PropTypes.oneOf(iconVariants),

  /**
   * The content of the component.
   * @uxpinpropname Text
   */
  children: PropTypes.node,

  /**
   * The action to display. It renders after the message, at the end of the Alert.
   * @uxpinpropname Action Icon
   * @uxpinignoreprop
   */
  action: PropTypes.oneOf(iconVariants),

  /**
   * The component maps the severity prop to a range of different icons, for instance success to <SuccessOutlined>. 
   * If you wish to change this mapping, you can provide your own. Alternatively, you can use the icon prop to override the icon displayed.
   * @uxpinignoreprop
   */
  iconMapping: PropTypes.object,

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
  color: PropTypes.oneOf(['error', 'info', 'success', 'warning']),

  /**
   * The severity of the alert. This defines the color and icon used.
   * @uxpinpropname Type
   */
  severity: PropTypes.oneOf(["success", "error", "info", "warning"]),

  /**
   * The variant to use.
   * @uxpinpropname Fill Variant
   */
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),

  /**
   * The ARIA role attribute of the element.
   * @uxpinpropname ARIA Role
   */
  role: PropTypes.string,

  /**
   * Callback fired when the component requests to be closed. 
   * When provided and no action prop is set, a close icon button is displayed that triggers the callback when clicked.
   */
  onClose: PropTypes.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object
}

export default Alert;