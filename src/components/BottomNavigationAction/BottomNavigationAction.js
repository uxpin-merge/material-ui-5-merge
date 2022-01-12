import React from "react";
import PropTypes from "prop-types";
import BottomNavigationActionM from "@mui/material/BottomNavigationAction";
import Icon from "../Icon/Icon";
import { iconVariants } from '../Icon/icon-variants'


/**
  * @uxpindocurl https://mui.com/api/bottom-navigation-action/
  */
function BottomNavigationAction(props) {
  return <BottomNavigationActionM {...props} icon={<Icon >{props.icon}</Icon>}/>;
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
    icon: PropTypes.oneOf(iconVariants),

    /**
     * The label element.
     */
    label: PropTypes.string,

    /**
     * If `true`, the `BottomNavigationAction` will show its label.
     * By default, only the selected `BottomNavigationAction`
     * inside `BottomNavigation` will show its label.
     */
    showLabel: PropTypes.bool,
    
    /**
     * You can provide your own value. Otherwise, we fallback to the child position index.
     */
    value: PropTypes.string,
    
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
     * https://mui.com/system/the-sx-prop/
     */
    sx: PropTypes.object,
  };
  
  export default BottomNavigationAction;
  