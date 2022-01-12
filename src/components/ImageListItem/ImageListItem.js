import React from 'react';
import PropTypes from 'prop-types';
import ImageListItemM from '@mui/material/ImageListItem';


/**
 * @uxpindocurl https://mui.com/api/image-list-item/#main-content
 */
function ImageListItem(props) {
    return (
        <ImageListItemM {...props}>{props.children}</ImageListItemM>
    )
}

ImageListItem.propTypes = {
    /**
     * The content of the component, normally an <img>.
     */
    /** @uxpinignoreprop */
    children: PropTypes.node,

    /**
     * Override or extend the styles applied to the component. 
     * See CSS API https://mui.com/api/image-list-item/#css for more details.
     */
    /** @uxpinignoreprop */
    classes: PropTypes.object,

    /**
     * Width of the item in number of grid columns.
     */
    cols: PropTypes.number,

    /**
     * The component used for the root node. Either a string to use a HTML element or a component.
     */
    /** @uxpinignoreprop */
    component: PropTypes.elementType,

    /**
     * Height of the item in number of grid rows.
     */
    rows: PropTypes.number,

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles. 
     * See the `sx` page for more details https://mui.com/system/the-sx-prop/.
     */
    /** */
    sx: PropTypes.object,

}

export default ImageListItem;