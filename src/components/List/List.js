import React from "react";
import PropTypes from "prop-types";
import ListM from '@mui/material/List';
// import ListSubheader from "../ListSubheader/ListSubheader";


/**
 * @uxpindocurl https://mui.com/api/list/
 */
function List(props) {
  return (
    <ListM {...props}>
      {/* <ListSubheader disableSticky>{props.subheadText}</ListSubheader> */}
      {props.children}
    </ListM>
  );
}

List.propTypes = {
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
   * If true, vertical padding is removed from the list.
   */
  disablePadding: PropTypes.bool,

  /**
   * The content of the subheader, normally ListSubheader component.
   */
  subheader: PropTypes.node,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object

}

export default List;