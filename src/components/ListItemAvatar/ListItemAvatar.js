import React from "react";
import PropTypes from "prop-types";
import ListItemAvatarM from '@mui/material/ListItemAvatar';


/**
 * @uxpindocurl https://mui.com/api/list-item-avatar/
 */
function ListItemAvatar(props) {
  return (
    <ListItemAvatarM {...props}>
      {props.children}
    </ListItemAvatarM>
  )
}

ListItemAvatar.propTypes = {
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
}

export default ListItemAvatar;