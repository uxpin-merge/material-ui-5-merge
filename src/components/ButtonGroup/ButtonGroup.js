import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import ButtonGroupM from '@mui/material/ButtonGroup';


/**
 * @uxpindocurl https://mui.com/api/button-group/
 */
function ButtonGroup(props) {
    return (
        <ButtonGroupM {...props}>{props.children}</ButtonGroupM>
    )
}

ButtonGroup.propTypes = {
  /**
   * The content of the component.
   */
  /** @uxpinignoreprop */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component. See CSS API below for more details.
   */
  /** @uxpinignoreprop */
  classes: PropTypes.object,

  /**
   * The color of the component. 
   * It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning']),

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  /** @uxpinignoreprop */
  component: PropTypes.elementType,

  /**
   * If 'true', the component is disabled.
   */
  disabled: PropTypes.bool,
  
  /**
   * If 'true', no elevation is used.
   */
  disableElevation: PropTypes.bool,

  /**
   * If 'true', the button ripple effect is disabled.
   */
  disableRipple: PropTypes.bool,
  
  /**
   * If 'true', the buttons will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,

   /**
    * The component orientation (layout flow direction).
    */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

   /**
    * The size of the component. small is equivalent to the dense button styling.
    */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

   /** 
    * The system prop that allows defining system overrides as well as additional CSS styles. 
    * See the `sx` page for more details https://mui.com/system/the-sx-prop/.
    */
   /**  */
  sx: PropTypes.object,

   /**
    * the variant used.  
    */
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']), 
}

export default ButtonGroup;