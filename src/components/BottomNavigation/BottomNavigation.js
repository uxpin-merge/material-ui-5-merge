import React from "react";
import PropTypes from "prop-types";
import BottomNavigationM from "@mui/material/BottomNavigation";


/**
  * @uxpindocurl https://mui.com/api/bottom-navigation/
  */
function BottomNavigation(props) {
  return <BottomNavigationM {...props}>{props.children}</BottomNavigationM>;
}

BottomNavigation.propTypes = {
    /**
      * @uxpinignoreprop 
      * The content of the component.
      */
     children: PropTypes.node,
     /**
      * @uxpinignoreprop 
      * Override or extend the styles applied to the component.
      */
     classes: PropTypes.object,

     /**
      * The component used for the root node. Either a string to use a HTML element or a component.
      */
     /** @uxpinignoreprop */
     component: PropTypes.elementType,

     /**
      * Callback fired when the value changes.
      */
     onChange: PropTypes.func,
     /**
      * If `true`, all `BottomNavigationAction`s will show their labels.
      * By default, only the selected `BottomNavigationAction` will show its label.
      */
     showLabels: PropTypes.bool,

     /** 
      * The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
      * https://mui.com/system/the-sx-prop/
     */
     sx: PropTypes.object,
     
     /**
      * The value of the currently selected BottomNavigationAction.
      */
     value: PropTypes.string,
   };
   
   export default BottomNavigation;