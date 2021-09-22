import React from 'react';
import PropTypes from 'prop-types';
import IconButtonM from '@mui/material/IconButton';


function IconButton (props) {
  return <IconButtonM{...props}>{props.children}</IconButtonM>
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  /**
   * The icon element.
   */
  children: PropTypes.node,
  
  /**
  * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["default", "inherit", "primary", "secondary", "error", "info", "success", "warning"]),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple will be disabled.
   */
  disableRipple: PropTypes.bool,

  /**
  * Aria tag for accessibility
  */
 ariaLabel: PropTypes.string,
   /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   */
  edge: PropTypes.oneOf(['start', 'end', false]),

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large'])


}
export default IconButton;