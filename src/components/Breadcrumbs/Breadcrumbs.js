import React from 'react';
import PropTypes from 'prop-types';
import BreadcrumbsM from '@mui/material/Breadcrumbs';


/**
  * @uxpindocurl https://mui.com/api/breadcrumbs/#main-content
  */
function Breadcrumbs(props) {
    return (
        <BreadcrumbsM {...props}>{props.children}</BreadcrumbsM>
    )
}

Breadcrumbs.propTypes = {
  /**
   * The content of the component.
   */
  /** @uxpinignoreprop */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component. See CSS API https://mui.com/api/breadcrumbs/#css for more details.
   */
  /** @uxpinignoreprop */
  classes: PropTypes.object,

  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  /** @uxpinignoreprop */
  component: PropTypes.node,

  /**
   * Override the default label for the expand button.
   * For localization purposes, you can use the provided translations https://mui.com/guides/localization/.
   */
  /** @uxpinignoreprop */
  expandText: PropTypes.string,

  /**
   * If max items is exceeded, the number of items to show after the ellipsis.
   */
  itemsAfterCollapse: PropTypes.number,

  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   */
  itemsBeforeCollapse: PropTypes.number,

  /**
   * Specifies the maximum number of breadcrumbs to display. 
   * When there are more than the maximum number, 
   * only the first itemsBeforeCollapse and last itemsAfterCollapse will be shown, with an ellipsis in between.
   */
  maxItems: PropTypes.number,

  /** Custom separator node */
  /** @uxpinignoreprop */
  separator: PropTypes.node,

  /** The system prop that allows defining system overrides as well as additional CSS styles. 
   * See the `sx` page for more details. https://mui.com/system/the-sx-prop/ */
  sx: PropTypes.object,
}

export default Breadcrumbs;
