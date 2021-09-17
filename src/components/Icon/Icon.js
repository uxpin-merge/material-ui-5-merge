import React from 'react';
import PropTypes from 'prop-types';
import IconM from '@mui/material/Icon';

function Icon (props) {
    return (
        <IconM{...props}>{props.children}</IconM>
    )
}

Icon.propTypes = {
    /**
  * The icon to display.
  * Use the name of the icon from https://material.io/tools/icons.
  * @uxpinpropname  Icon
  */
  children: PropTypes.node,
}





export default Icon;