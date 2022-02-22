import MenuListM from '@mui/material/MenuList';
import PropTypes from 'prop-types';
import * as React from 'react';


/**
 * @uxpindocurl https://mui.com/api/menu-list/
 */
function MenuList(props) {
  return <MenuListM {...props}>{props.children}</MenuListM>    
}

MenuList.propTypes = {
    /**
     * MenuList contents, normally MenuItems.
     * @uxpinignoreprop
     */
    children: PropTypes.node,

    /**
     * If true, will focus the [role="menu"] container and move into tab order.
     */
    autoFocus: PropTypes.bool,

    /**
     * If true, will focus the first menuitem if variant="menu" or selected item if variant="selectedMenu".
     */
    autoFocusItem: PropTypes.bool,

    /**
     * If true, will allow focus on disabled items.
     */
    disabledItemsFocusable: PropTypes.bool,

    /**
     * If true, the menu items will not wrap focus.
     */
    disableListWrap: PropTypes.bool,

    /**
     * The variant to use. Use menu to prevent selected items from impacting the initial focus 
     * and the vertical alignment relative to the anchor element.
     */
    variant: PropTypes.oneOf(['menu', 'selectedMenu']),

    /** 
     * The component used for the root node. Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,
}

export default MenuList;