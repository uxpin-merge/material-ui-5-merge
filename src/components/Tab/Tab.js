import TabM from '@mui/material/Tab';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * @uxpindocurl https://mui.com/api/tab/
 */
function Tab(props) {
    return (
        <TabM {...props}>{props.children}</TabM>
    )
}

Tab.propTypes = {
   /**
    * @uxpinignoreprop
    * Override or extend the styles applied to the component.
    * See [CSS API](#css-api) below for more details.
    */
   classes: PropTypes.object,
 
   /**
    * @uxpinignoreprop
    * @ignore
    */
   className: PropTypes.string,
 
   /**
    * If `true`, the tab will be disabled.
    */
   disabled: PropTypes.bool,

   /**
    * If true, the keyboard focus ripple is disabled.
    */
   disableRipple: PropTypes.bool,
 
   /**
    * @ignore
    */
   fullWidth: PropTypes.bool,
 
   /**
    * The icon element.
    */
   icon: PropTypes.oneOf([PropTypes.node, PropTypes.string]),
 
   /**
    * @uxpinignoreprop
    * @ignore
    * For server-side rendering consideration, we let the selected tab
    * render the indicator.
    */
   indicator: PropTypes.node,
 
   /**
    * The label element.
    */
   label: PropTypes.node,
 
   /**
    * @ignore
    */
   onChange: PropTypes.func,
 
   /**
    * @ignore
    */
   onClick: PropTypes.func,
 
   /**
    * @ignore
    */
   selected: PropTypes.bool,
 
   /**
    * @ignore
    */
   textColor: PropTypes.oneOf(['secondary', 'primary', 'inherit']),
 
   /**
    * You can provide your own value. Otherwise, we fallback to the child position index.
    */
   value: PropTypes.string,
   
   /**
    * Tab labels appear in a single row. They can use a second line if needed.
    */
   wrapped: PropTypes.bool,

   /**
    * The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details https://mui.com/system/the-sx-prop/.
    */
    sx: PropTypes.object,
}   

export default Tab;