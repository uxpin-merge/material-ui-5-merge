import React from "react";
import PropTypes from "prop-types";
import ListItemTextM from '@mui/material/ListItemText';


/**
 * @uxpindocurl https://mui.com/api/list-item-text/
 */
function ListItemText(props) {
  return <ListItemTextM {...props} />;
}

ListItemText.propTypes = {
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
   * These props will be forwarded to the secondary typography component (as long as disableTypography is not true).
   * @uxpinignoreprop
   */
  disableTypography: PropTypes.bool,

  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset: PropTypes.bool,

  /**
   * The main copy.
   * These props will be forwarded to the secondary typography component (as long as disableTypography is not true).
   * @uxpinpropname  Primary Text
   */
  primary: PropTypes.node,

  /**
   * These props will be forwarded to the secondary typography component (as long as disableTypography is not true).
   * @uxpinignoreprop
   */
  primaryTypographyProps: PropTypes.object,

  /**
   * The secondary content element.
   * These props will be forwarded to the secondary typography component (as long as disableTypography is not true).
   * @uxpinpropname  Secondary Text
   */
  secondary: PropTypes.node,

  /**
   * These props will be forwarded to the secondary typography component (as long as disableTypography is not true).
   * @uxpinignoreprop
   */
  secondaryTypographyProps: PropTypes.object,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
}

export default ListItemText