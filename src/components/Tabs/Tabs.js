import React from 'react';
import PropTypes from 'prop-types';
import TabsM from '@mui/material/Tabs';

/**
 * @uxpindocurl https://mui.com/api/tabs/#main-content
 */
function Tabs(props) {
    return (
        <TabsM {...props}>{props.children}</TabsM>
    )
}

Tabs.propTypes = {
    /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports `updateIndicator()` action.
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: PropTypes.func,

  /**
   * If 'true', the scroll buttons aren't forced hidden on mobile. By default the scroll buttons are hidden on mobile and takes precedence over scrollButtons.
   */
  allowScrollButtonsMobile: PropTypes.bool,

  /**
   * If `true`, the Tabss will be centered.
   * This property is intended for large views.
   */
  centered: PropTypes.bool,

  /**
   * @uxpinignoreprop
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * @uxpinignoreprop
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * The label for the Tabs as a string.
   */
  ariaLabel: PropTypes.string,

  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  /** @uxpinignoreprop */
  ariaLabelledBy: PropTypes.string,

  
  /**
   * @uxpinignoreprop
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.string,

  /**
   * If `true`, the Tabss will grow to use all the available space.
   * This property is intended for small views, like on mobile.
   */
  fullWidth: PropTypes.bool,

  /**
   * Determines the color of the indicator.
   */
  indicatorColor: PropTypes.oneOf(['secondary', 'primary']),

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {number} value We default to the index of the child
   */
  onChange: PropTypes.func,

  /**
   * The component orientation (layout flow direction).
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * If `true`, it will invoke scrolling properties and allow for horizontally
   * scrolling (or swiping) of the Tabs bar.
   */
  scrollable: PropTypes.bool,

  /**
   * @uxpinignoreprop
   * The component used to render the scroll buttons.
   */
  ScrollButtonComponent: PropTypes.node,

  /**
   * Determine behavior of scroll buttons when Tabss are set to scroll
   * `auto` will only present them on medium and larger viewports
   * `on` will always present them
   * `off` will never present them
   */
  scrollButtons: PropTypes.oneOf(['auto', 'on', 'off']),

  /**
   * If true the selected tab changes on focus. Otherwise it only changes on activation.
   */
  selectionFollowsFocus: PropTypes.bool,

  /**
   * @uxpinignoreprop
   * Properties applied to the `TabsIndicator` element.
   */
  TabsIndicatorProps: PropTypes.object,

  /**
   * Determines the color of the `Tabs`.
   */
  textColor: PropTypes.oneOf(['secondary', 'primary', 'inherit']),

  /**
   * @uxpinignoreprop
   * @ignore
   */
  theme: PropTypes.object,

  /**
   * The value of the currently selected `Tabs`.
   * If you don't want any selected `Tabs`, you can set this property to `false`.
   * @uxpinbind onChange 1
   */
  value: PropTypes.number,

  /**
   * Number of the tab that supposed to be active initially. Starts with  0 for the first tab.
   */
  defaultValue: PropTypes.number,

  /**
   *  Determines additional display behavior of the Tabss:
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the Tabs bar.
   *  -`fullWidth` will make the Tabss grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   */
  variant: PropTypes.oneOf(['standard', 'scrollable', 'fullWidth']),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details https://mui.com/system/the-sx-prop/.
   */
  sx: PropTypes.object,

  /**
   * Props applied to the tab indicator element.
   */
  /** @uxpinignoreprop */
  TabIndicatorProps: PropTypes.object,
  
  /**
   * Props applied to the TabScrollButton element.
   */
  /** @uxpinignoreprop */
  TabScrollButtonProps: PropTypes.object,

  /**
   * If 'true', the scrollbar is visible. It can be useful when displaying a long vertical list of tabs.
   */
  visibleScrollbar: PropTypes.bool,


}

export default Tabs;
