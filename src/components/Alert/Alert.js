import React from "react";
import PropTypes from "prop-types";
import AlertM from '@mui/material/Alert';
import IconButton from '../IconButton/IconButton';
import Icon from '../Icon/Icon';
import { iconVariants } from '../Icon/icon-variants'
import Collapse from '@mui/material/Collapse';
import AlertTitle from "../AlertTitle/AlertTitle";

/**
 * @uxpindocurl https://mui.com/api/alert/
 */
function Alert(props) {

  const [open, setOpen] = React.useState(props.isOpen);

  React.useEffect(() => {
    setOpen(props.isOpen)
  }, [props.isOpen]); // Only re-run the effect if value prop changes

  const { isOpen, icon, title, hasClose, onClose, ...otherProps } = props;
  return (

    <Collapse in={open}>
      <AlertM
        {...otherProps}
        icon={icon ? <Icon fontSize="inherit">{icon}</Icon> : null}
        action={
          props.hasClose ?
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }
              }
            >
              {props.action}
            </IconButton>
            : null
        }
        sx={{ mb: 2 }}

      >
        {title ?
          <AlertTitle>{title}</AlertTitle>
          : null
        }
        {props.children}
      </AlertM>
    </Collapse>

  )
}

Alert.propTypes = {

  title: PropTypes.string,
  /**
   * Override the icon displayed before the children. 
   * Unless provided, the icon is mapped to the value of the severity prop. Set to false to remove the icon.
   */
  icon: PropTypes.oneOf(iconVariants),

  /**
   * The content of the component.
   * @uxpinpropname Text
   */
  children: PropTypes.string,

  /**
   * The action to display. It renders after the message, at the end of the Alert.
   * @uxpinpropname Close Icon
   */
  action: PropTypes.oneOf(iconVariants),

  isOpen: PropTypes.bool,

  /**
 * The variant to use.
 * @uxpinpropname Closeable
 */
  hasClose: PropTypes.bool,

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
   * @uxpinignoreprop
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
   * @uxpinignoreprop
   */
  onClose: PropTypes.func,

  onChange: PropTypes.func,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object
}

Alert.defaultProps = {
  // NOTE: Checked must be controlled state from the outset, otherwise changing state in the app will trigger an error
  // see: https://fb.me/react-controlled-components
  isOpen: true,
  onChange: () => undefined,
  action: "close",
  hasClose: true,
  title: "This is a title",
  children: "This is the alert copy"
};

export default Alert;