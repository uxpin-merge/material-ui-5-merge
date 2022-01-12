import * as React from 'react';
import PropTypes from 'prop-types';
import MenuItemM from '@mui/material/MenuItem';

/**
 * @uxpindocurl https://mui.com/api/menu-item/
 */
function MenuItem(props) {
  return (
    <MenuItemM {...props}>{props.children}</MenuItemM>
  )
}

MenuItem.propTypes = {
  autoFocus: PropTypes.bool,

  children: PropTypes.node,

  /**
   * @uxpinignoreprop
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * @uxpinignoreprop
   */
  component: PropTypes.elementType,

  dense: PropTypes.bool,

  disableGutters: PropTypes.bool,

  divider: PropTypes.bool,

  /**
   * @uxpinignoreprop
   */
  focusVisibleClassName: PropTypes.string,

  /**
   * Override or extend the styles applied to the component.
   */
  sx: PropTypes.object,

  value: PropTypes.string,
}

export default MenuItem;