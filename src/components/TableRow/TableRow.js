import React from 'react';
import PropTypes from 'prop-types';
import TableRowM from '@mui/material/TableRow';

/**
 * @uxpindocurl https://mui.com/api/table-row/#main-content
 */
function TableRow(props) {
  return (
    <TableRowM {...props}>{props.children}</TableRowM>
  )
}

TableRow.propTypes = {
  /**
   * Should be valid <tr> children such as TableCell.
   * @uxpinignoreprop
   * */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component. See CSS API below for more details.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node. 
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * If true, the table row will shade on hover.
   */
  hover: PropTypes.bool,

  /**
   * If true, the table row will have the selected shading.
   */
  selected: PropTypes.bool,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. 
   * See the `sx` page for more details.
   */
  sx: PropTypes.object,
}

export default TableRow;