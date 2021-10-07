import React from "react";
import PropTypes from "prop-types";
import BottomNavigationActionM from "@mui/material/BottomNavigationAction";

function BottomNavigationAction(props) {
  return <BottomNavigationActionM {...props} />;
}

BottomNavigationAction.propTypes = {
    /**
     * @uxpinignoreprop 
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * The icon element.
     */
    icon: PropTypes.node,
    /**
     * The label element.
     */
    label: PropTypes.node,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    /**
     * If `true`, the `BottomNavigationAction` will show its label.
     * By default, only the selected `BottomNavigationAction`
     * inside `BottomNavigation` will show its label.
     */
    showLabel: PropTypes.bool,
    value: PropTypes.string,
    
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
     * https://mui.com/system/the-sx-prop/
     */
    sx: PropTypes.object,
  };
  
  export default BottomNavigationAction;
  