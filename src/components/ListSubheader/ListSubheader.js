import React from "react";
import PropTypes from "prop-types";
import ListSubheaderM from '@mui/material/ListSubheader';


/**
 * @uxpindocurl https://mui.com/api/list-subheader/
 */
function ListSubheader(props) {
  return (
    <ListSubheaderM {...props}>
      {props.children}
    </ListSubheaderM>
  )
}

ListSubheader.propTypes = {
  /**
   * The content of the component. Text or nested components.
   * @uxpinpropname Text
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The color of the Subheader.
   */
  color: PropTypes.oneOf(["inherit", "primary"]),

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If true, the left and right padding is removed.
   */
  disableGutters: PropTypes.bool,

  /**
   * If true, the List Subheader will not stick to the top during scroll.
   */
  disableSticky: PropTypes.bool,

  /**
   * If true, the List Subheader is indented.
   */
  inset: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
}

export default ListSubheader;