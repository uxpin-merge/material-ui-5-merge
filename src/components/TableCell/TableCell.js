import React from 'react';
import PropTypes from 'prop-types';
import TableCellM from '@mui/material/TableCell';

function TableCell(props) {
  return (
    <TableCellM {...props}>{props.children}</TableCellM>
  )
}

TableCell.propTypes = {
  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),

  /**
   * The content of the TableCell, normally TableCellHead and TableCellBody.
   * @uxpinpropname Cell Data
   * */
  children: PropTypes.node,

  classes: PropTypes.object,

  component: PropTypes.elementType,

  padding: PropTypes.oneOf('checkbox', 'none', 'normal'),

  scope: PropTypes.string,

  size: PropTypes.oneOf(['small', 'medium', 'large']),

  sortDirection: PropTypes.oneOf(['asc', 'desc', 'false']),

  variant: PropTypes.oneOf(['body', 'footer', 'head']),

  sx: PropTypes.object,
}

export default TableCell;