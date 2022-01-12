import * as React from 'react';
import PropTypes from "prop-types";
import StackM from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

/**
 * @uxpindocurl https://mui.com/components/stack/#main-content
 */
function Stack(props) {
  let dividerOrientation = '';

  if (props.direction === "row" || props.direction === "row-reverse") {
    dividerOrientation = "vertical"
  }
  else {
    dividerOrientation = "horizontal"
  }

  const { hasDivider, ...otherProps } = props;

  return (
    <StackM
      {...otherProps}
      divider={hasDivider && <Divider orientation={dividerOrientation} flexItem />}
    >
      {props.children}
    </StackM>
  )
}

Stack.propTypes = {
  /**
   * Elements contained by Tooltip.
   * @uxpinignoreprop 
   */
  children: PropTypes.node,

  /**
   * Defines the flex-direction style property. It is applied for all screen sizes.
   */
  direction: PropTypes.oneOf([
    'column-reverse',
    'column',
    'row-reverse',
    'row',
  ]),

  /**
 * Defines the space between immediate children in px
 */
  spacing: PropTypes.number,

  /**
   * Add an element between each child.
   * This needs improving
   * @uxpinignoreprop 
   */
  divider: PropTypes.node,
  /**
   * Add an element between each child.
   * This needs improving
   * 
   */
  hasDivider: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.object,
}

export default Stack;