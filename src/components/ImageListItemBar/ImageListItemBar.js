import ImageListItemBarM from '@mui/material/ImageListItemBar';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * @uxpindocurl https://mui.com/api/image-list-item-bar/
 */
function ImageListItemBar(props) {
    return (
        <ImageListItemBarM {...props}>{props.children}</ImageListItemBarM>
    )
}

ImageListItemBar.propTypes = {
    /**
     * An IconButton element to be used as secondary action target (primary action target is the item itself).
     */
    // /** @uxpinignoreprop */
    actionIcon: PropTypes.node,

    /**
     * Position of secondary action IconButton.
     */
    actionPosition: PropTypes.oneOf(['left', 'right']),

    /**
     * Override or extend the styles applied to the component. 
     * See CSS API https://mui.com/api/image-list-item-bar/#css for more details.
     */
    /** @uxpinignoreprop */
    classes: PropTypes.object,

    /**
     * Position of the title bar.
     */
    position: PropTypes.oneOf(['below', 'bottom', 'top']),

    /**
     * String or element serving as subtitle (support text).
     */
    subtitle: PropTypes.node,

    /**
     * The system prop that allows defining system overrides as well as additional CSS styles. 
     * See the `sx` page for more details. https://mui.com/system/the-sx-prop/
     */
    /** */
    sx: PropTypes.object,

    /**
     * Title to be displayed.
     */
    title: PropTypes.node,

}

export default ImageListItemBar;