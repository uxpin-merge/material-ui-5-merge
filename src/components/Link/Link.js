import React from 'react';
import PropTypes from 'prop-types';
import LinkM from '@mui/material/Link';


/**
 * @uxpindocurl https://mui.com/api/link/
 */
function Link(props) {
    return (
        <LinkM {...props}>{props.children}</LinkM>
    )
}

Link.propTypes = {
    /**
     * The content of the component.
     */
    /** @uxpinpropname Text */
    children: PropTypes.node,

    /**
     * href for the component
     */
    href: PropTypes.string,

    /**
     * Override or extend the styles applied to the component. See CSS API https://mui.com/api/link/#css for more details.
     */
    /** @uxpinignoreprop */
    classes: PropTypes.object,

    /**
     * The color of the link.
     */
    color: PropTypes.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]),

    /**
     * The component used for the root node. Either a string to use a HTML element or a component.
     * ⚠️ Needs to be able to hold a ref https://mui.com/guides/composition/#caveat-with-refs.
     */
    /** @uxpinignoreprop */
    component: PropTypes.node,

    /**
     * classes prop applied to the Typography element.
     */
    /** @uxpinignoreprop */
    TypographyClasses: PropTypes.object,

    /**
     * Controls when the link should have an underline.
     */
    underline: PropTypes.oneOf(['always', 'hover', 'none']),

    /**
     * Applies the theme typography styles.
     */
    variant: PropTypes.oneOf([
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2',
    ]),
    
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles. 
     * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
     */
    sx: PropTypes.object,

    /**
     * On click event to use with UXPin interactions.
     */
    onClick: PropTypes.func,
   
}

export default Link;