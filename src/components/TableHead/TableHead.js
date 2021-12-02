import React from 'react';
import PropTypes from 'prop-types';
import TableHeadM from '@mui/material/TableHead';

/**
 * @uxpindocurl https://mui.com/api/table-head/#main-content
 */
function TableHead(props) {
  return (
    <TableHeadM {...props}>{props.children}</TableHeadM>
  )
}

TableHead.propTypes = {
  /**
   * The content of the component, normally TableRow.
   * @uxpinignoreprop
   * */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component. 
   * See CSS API below for more details.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,

  /**
   * The component used for the root node. 
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. 
   * See the `sx` page for more details.
   */
  sx: PropTypes.object,
}

export default TableHead;