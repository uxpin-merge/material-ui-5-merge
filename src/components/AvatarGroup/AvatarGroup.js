import * as React from 'react';
import AvatarGroupM  from '@mui/material/AvatarGroup';
import PropTypes from 'prop-types';


/**
 * @uxpindocurl https://mui.com/api/avatar-group/#main-content
 */
function AvatarGroup(props) {
    return (
        <AvatarGroupM {...props}>{props.children}</AvatarGroupM>
    )
}

AvatarGroup.propTypes = {
    /**
     * 	The avatars to stack.
     * @uxpinignoreprop  
     */
    children: PropTypes.node,

    /**
     * Max avatars to show before +x.
     */
    max: PropTypes.number,

    /**
     * The total number of avatars. Used for calculating the number of extra avatars.
     */
    total: PropTypes.number,

    /**
     * Spacing between avatars.
     */
    spacing: PropTypes.oneOf(['medium', 'small', PropTypes.number]),

    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['circular', 'round', 'square', PropTypes.string]),

    /**
     * Override or extend the styles applied to the component. See CSS API https://mui.com/api/avatar-group/#css for more details.
     */
    classes: PropTypes.object,

    /**
     * The props used for each slot inside the AvatarGroup.
     */
    componentsProps: PropTypes.object,
}

export default AvatarGroup;