import React from 'react';
import PropTypes from 'prop-types';
import FormGroupM from '@mui/material/FormGroup';

/**
 * @uxpindocurl https://mui.com/api/form-group/#main-content
 */
function FormGroup(props) {
    return (
        <FormGroupM {...props}>{props.children}</FormGroupM>
    )
}

FormGroup.propTypes = {
    /**
     * The content of this component.
     * @uxpinignoreprop
     */

    children: PropTypes.node,

    /**
     * Override or extend the styles applied to the component. See CSS API https://mui.com/api/form-group/#css for more details.
     */
    classes: PropTypes.object,

    /**
     * Display group of elements in a compact row.
     */
    row: PropTypes.bool,

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles. 
     * See the `sx` page for more details https://mui.com/system/the-sx-prop/.
     */
    /** */
    sx: PropTypes.object,
}

export default FormGroup;