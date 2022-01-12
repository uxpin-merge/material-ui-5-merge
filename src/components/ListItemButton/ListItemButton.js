import React from "react";
import PropTypes from "prop-types";
import ListItemButtonM from '@mui/material/ListItemButton';


/**
 * @uxpindocurl https://mui.com/api/list-item-button/
 */
function ListItemButton(props) {
  return (
    <ListItemButtonM {...props}>
      {props.children}
    </ListItemButtonM>
  )
}

ListItemButton.propTypes = {
  alignItems: PropTypes.oneOf(['center', 'flex-start']),

  autoFocus: PropTypes.bool,

  /**
   * The content of the component. Text or nested components.
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If true, compact vertical padding designed for keyboard and mouse input is used for the list and list items. 
   * The prop is available to descendant components as the dense context.
   */
  dense: PropTypes.bool,

  /**
   * If true, the component is disabled.
   */
  disabled: PropTypes.bool,
  
  /**
   * This prop can help identify which element has keyboard focus. 
   * The class name will be applied when the element gains the focus through keyboard interaction
   * @uxpinignoreprop
   */
  focusVisibleClassName: PropTypes.string,

  /**
   * Custom Prop.
   * On click event to use with UXPin interactions.
   */
  onClick: PropTypes.func,

  /**
   * Use to apply selected styling.
   */
  selected: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
}

export default ListItemButton;