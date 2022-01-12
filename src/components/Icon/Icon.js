import React from 'react';
import PropTypes from 'prop-types';
import IconM from '@mui/material/Icon';
import { iconVariants } from './icon-variants'

let icons = document.createElement('link');
icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');
icons.setAttribute('rel', 'stylesheet');
document.head.appendChild(icons);

/**
 * @uxpindocurl https://mui.com/api/icon/
 */
function Icon (props) {
    return <IconM{...props}>{props.children}</IconM>
}

Icon.propTypes = {
  /**
   * The icon to display.
   * Use the name of the icon from https://material.io/tools/icons.
   * @uxpinpropname  Icon
   */
  children: PropTypes.oneOf(iconVariants),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning']),

  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @uxpinpropname Size
   */
  fontSize: PropTypes.oneOf(['large', 'medium', 'small', 'inherit']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
}



Icon.defaultProps = {
  // fontSize: "large"
}


export default Icon;