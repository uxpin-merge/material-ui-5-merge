import * as React from 'react';
import PropTypes from "prop-types";
import StackM from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

function Stack(props) {
  return (
    <StackM>
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
    'column-reverse',
    'column',
    'row-reverse',
    'row',
  ]),

  /**
   * Add an element between each child.
   * This needs improving
   */
  divider: PropTypes.node,

  /**
   * Defines the space between immediate children in px
   */
  spacing: PropTypes.number,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   * @uxpinignoreprop
   */
  sx: PropTypes.object,
}

export default Stack;