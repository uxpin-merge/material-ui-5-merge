import React from 'react';
import PropTypes from 'prop-types';
import FormLabelM from '@mui/material/FormLabel';

/**
 * @uxpindocurl https://mui.com/api/form-label/
 */
function FormLabel(props) {
    return (
        <FormLabelM {...props}>{props.children}</FormLabelM>
    )
}

FormLabel.propTypes = {
    /**
     * The content of the component.
     */
    /** @uxpinignoreprop */
    children: PropTypes.node,

    /**
     * Override or extend the styles applied to the component. 
     * See CSS API https://mui.com/api/form-label/#css for more details.
     */
    classes: PropTypes.object,

    /**
     * The color of the component. 
     * It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['error', 'info', 'primary', 'secondary', 'success', 'warning']),

    /**
     * The component used for the root node. Either a string to use a HTML element or a component.
     */
    /** @uxpinignoreprop */
    component: PropTypes.elementType,

    /**
     * If 'true', the label should be displayed in a disabled state.
     */
    disabled: PropTypes.bool,

    /**
     * If 'true', the label is displayed in an error state.
     */
    error: PropTypes.bool,

    /**
     * If 'true', the label should use filled classes key.
     */
    /** @uxpinignoreprop */
    filled: PropTypes.bool,

    /**
     * If 'true', the input of this label is focused (used by FormGroup components).
     */
    focused: PropTypes.bool,

    /**
     * If 'true', the label will indicate that the input is required.
     */
    required: PropTypes.bool,

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles. 
     * See the `sx` page for more details https://mui.com/system/the-sx-prop/.
     */
    /** */
    sx: PropTypes.object,
}

export default FormLabel;