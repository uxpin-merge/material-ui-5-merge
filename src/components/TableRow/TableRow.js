import React from 'react';
import PropTypes from 'prop-types';
import TableRowM from '@mui/material/TableRow';

function TableRow(props) {
  return (
    <TableRowM {...props}>{props.children}</TableRowM>
  )
}

TableRow.propTypes = {
  /**
   * The content of the TableRow, normally TableRowHead and TableRowBody.
   * @uxpinignoreprop
   * */
  children: PropTypes.node,

  classes: PropTypes.object,

  component: PropTypes.elementType,

  hover: PropTypes.bool,

  selected: PropTypes.bool,

  sx: PropTypes.object,
}

export default TableRow;