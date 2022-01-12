import React from 'react';
import PropTypes from 'prop-types';
import ImageListM from '@mui/material/ImageList';

/**
 * @uxpindocurl https://mui.com/components/image-list/#main-content
 */
function ImageList(props) {
    return (
        <ImageListM {...props}>{props.children}</ImageListM>
    )
}

ImageList.propTypes = {
    /**
     * The content of the component, normally ImageListItems.
     */
    /** @uxpinignoreprops */
    children: PropTypes.node,

    /**
     * Override or extend the styles applied to the component. See CSS API https://mui.com/api/image-list/#css for more details.
     */
    /** @uxpinignoreprop */
    classes: PropTypes.object,

    /**
     * Number of columns.
     */
    cols: PropTypes.number,

    /**
     * The component used for the root node. Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,

    /**
     * The gap between items in px.
     */
    gap: PropTypes.number,

    /**
     * The height of one row in px.
     */
    rowHeight: PropTypes.oneOfType(['auto', PropTypes.number]),

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles. 
     * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
     */
    /** */
    sx: PropTypes.object,

    /** The variant to use. */
    variant: PropTypes.oneOf(['masonary', 'quilted', 'standard', 'woven'])

}

export default ImageList;