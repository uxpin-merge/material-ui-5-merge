import React from "react";
import PropTypes from "prop-types";
import ListItemM from '@mui/material/ListItem';
import Icon from '../Icon/Icon';
import ListItemIcon from '../ListItemIcon/ListItemIcon';
import ListItemText from '../ListItemText/ListItemText';


/**
 * @uxpindocurl https://mui.com/api/list-item/
 */
function ListItem(props) {
  return (
    <ListItemM {...props}>
      {props.children}
    </ListItemM>
  )
}

ListItem.propTypes = {
  alignItems: PropTypes.oneOf(['center', 'flex-start']),

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
   * The props used for each slot inside the Input.
   * @uxpinignoreprop
   */
  componentProps: PropTypes.object,

  /**
   * If true, compact vertical padding designed for keyboard and mouse input is used for the list and list items. 
   * The prop is available to descendant components as the dense context.
   */
  dense: PropTypes.bool,

  /**
   * If true, the left and right padding is removed.
   */
  disableGutters: PropTypes.bool,

  /**
   * If true, all padding is removed.
   */
  disablePadding: PropTypes.bool,

  /**
   * If true, a 1px light border is added to the bottom of the list item.
   */
  divider: PropTypes.bool,

  /**
   * The element to display at the end of ListItem.
  //  * @uxpinignoreprop
   * This might be difficult to add for merge as writing for e.g. <Checkbox /> is not good Designer experience.
   */
  secondaryAction: PropTypes.node,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object
}

export default ListItem