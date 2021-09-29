import React from 'react';
import PropTypes from 'prop-types';
import IconM from '@mui/material/Icon';

function Icon (props) {
    return <IconM{...props} size={props.fontSize}>{props.children}</IconM>
        
    
}

Icon.propTypes = {
    /**
  * The icon to display.
  * Use the name of the icon from https://material.io/tools/icons.
  * @uxpinpropname  Icon
  */
  children: PropTypes.node,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning']),

  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @uxpinpropname Size
   */
  fontSize: PropTypes.oneOf(['inherit', 'large', 'medium', 'small']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * @uxpinignoreprop
   */
  sx: PropTypes.object,
}





export default Icon;