import React from 'react';
import PropTypes from 'prop-types';
import TableBodyM from '@mui/material/TableBody';

function TableBody(props) {
  return (
    <TableBodyM {...props}>{props.children}</TableBodyM>
  )
}

TableBody.propTypes = {
  /**
   * The content of the TableBody, normally TableBodyHead and TableBodyBody.
   * @uxpinignoreprop
   * */
  children: PropTypes.node,

  classes: PropTypes.object,

  component: PropTypes.elementType,

  sx: PropTypes.object,
}

export default TableBody;