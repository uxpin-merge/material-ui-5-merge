import React from 'react';
import PropTypes from 'prop-types';
import LoadingButtonM from '@mui/lab/LoadingButton';
import Icon from '../Icon/Icon';
import { iconVariants } from '../Icon/icon-variants'

/**
 * @uxpindocurl https://mui.com/api/loading-button/
 */
function LoadingButton(props) {
    const { uxpinRef, ...other } = props;

    return (
        <LoadingButtonM
        {...other}
        ref={uxpinRef}
        startIcon={props.startIcon && <Icon>{props.startIcon}</Icon>}
        endIcon={props.endIcon && <Icon>{props.endIcon}</Icon>}
        >
            {props.children}
        </LoadingButtonM>
    )
}

LoadingButton.propTypes = {
    /**
     * The content of the component.
     * @uxpinpropname Text
     */
    children: PropTypes.node,

    /**
     * Override or extend the styles applied to the component. 
     * See CSS API https://mui.com/api/loading-button/#css for more details.
     */
    /** @uxpinignoreprop */
    classes: PropTypes.object,

    /**
     * The HREF of the button.
     */
    href: PropTypes.string,

    /**
     * If 'true', the component is disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If 'true', the loading indicator is shown.
     */
    loading: PropTypes.bool,

    /**
     * The loading indicator can be positioned on the start, end, or the center of the button.
     */
    loadingPosition: PropTypes.oneOf(['start', 'center', 'end']),

    /**
     * Element placed before the children if the button is in loading state.
     * @uxpinignoreprop
     */
    loadingIndicator: PropTypes.node,
    /**
     * The color of the button.
     */
    color: PropTypes.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]),

    /**
     * The size of the button.
     */
    size: PropTypes.oneOf(["small", "medium", "large"]),

     /**
      * The type of button.
      */
    variant: PropTypes.oneOf(["text", "outlined", "contained"]),

    /**
     * If set, icon will display to the left.
     * Use the name of the icon from https://material.io/tools/icons.
     */
    startIcon: PropTypes.oneOf(iconVariants),

    /**
     * If set, icon will display to the right.
     * Use the name of the icon from https://material.io/tools/icons.
     */
    endIcon: PropTypes.oneOf(iconVariants),

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

export default LoadingButton;



   