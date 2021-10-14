import * as React from 'React';
import PropTypes from 'prop-types';
import FabM from '@mui/material/Fab';
import Icon from '../Icon/Icon';

function FloatingActionButton(props) {
 return (
   <FabM 
    {...props}
  >
     {props.startIcon && <Icon>{props.startIcon}</Icon>}
     {props.label}
     {props.endIcon && <Icon>{props.endIcon}</Icon>}
   </FabM>
 )
}

FloatingActionButton.propTypes = {
  /**
   * The label of the button.
   * @uxpinignoreprop
   * */
  children: PropTypes.node,

  /**
   * Custom Prop to replace children.
   * If set, icon will display to the left.
   * Use this Prop to just have a single Icon in the Button.
   * Use the name of the icon from https://material.io/tools/icons.
   */
  startIcon: PropTypes.oneOf(['home', 'add_circle', 'star', 'navigation']),

  /**
   * Custom Prop to replace children.
   * If set, icon will display to the right.
   * Use the name of the icon from https://material.io/tools/icons.
   */
  endIcon: PropTypes.node,

  /**
   * @uxpinignoreprop
   * Override or extend the styles applied to the component. See
   */
  classes: PropTypes.object,

  /**
   * The color of the button.
   */
  color: PropTypes.oneOf(["inherit", "primary", "secondary", "string"]),

  /**
   * @uxpinignoreprop
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * @uxpinignoreprop
   * If true, the keyboard focus ripple is disabled.
   */
  disabledFocusRipple: PropTypes.bool,

  /**
   * @uxpinignoreprop
   * If true, the ripple effect is disabled.
   */
  disabledRipple: PropTypes.bool,

  /**
   * The URL to link to when the button is clicked. 
   * If defined, an a element will be used as the root node.
   */
  href: PropTypes.string,

  /**
   * Custom Prop.
   * The text of the button.
   */
  label: PropTypes.string,

  /**
   * The size of the button.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  /**
   * The type of button.
   */
  variant: PropTypes.oneOf(["circular", "extended"]),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.    
   * @uxpinignoreprop
   * */
  sx: PropTypes.object,
}

export default FloatingActionButton;