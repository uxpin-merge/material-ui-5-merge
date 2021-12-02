import React from 'react';
import PropTypes from 'prop-types';
import ToolbarM from '@mui/material/Toolbar';

/**
 * @uxpindocurl https://mui.com/api/toolbar/
 */
function Toolbar(props) {
    return (
        <ToolbarM {...props} sx={{"justifyContent": props.justifyContent}}>{props.children}</ToolbarM>
    )
}

Toolbar.propTypes = {
    /**
     * @uxpinignoreprop
     * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
     */
    children: PropTypes.node,
  
    /**
     * @uxpinignoreprop
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: PropTypes.object,

    /**
     * The component used for the root node. Either a string to use a HTML element or a component.
     */
    /** @uxpinignoreprop */
    component: PropTypes.elementType,
  
    /**
     * If `true`, disables gutter padding.
     */
    disableGutters: PropTypes.bool,
    
    /** 
     * The system prop that allows defining system overrides as well as additional CSS styles. 
     * See the `sx` https://mui.com/system/the-sx-prop/ page for more details.
     */
    sx: PropTypes.object,
  
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(["regular", "dense"]),

    justifyContent: PropTypes.oneOf(["center", "flex-end", "flex-start", "space-around", "space-between", "space-evenly", "stretch"])
  };
  
export default Toolbar;