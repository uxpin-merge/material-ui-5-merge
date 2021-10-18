import React from 'react';
import PropTypes from 'prop-types';
import TableM from '@mui/material/Table';

function Table(props) {
  return (
    <TableM {...props}>
      {props.children}
    </TableM>
  )
}

Table.propTypes ={
  /**
   * The content of the table, normally TableHead and TableBody.
   * @uxpinignoreprop
   * */
  children: PropTypes.node,

  classes: PropTypes.object,

  component: PropTypes.elementType,

  padding: PropTypes.oneOf('checkbox', 'none', 'normal'),

  size: PropTypes.oneOf(['small', 'medium', 'large']),

  stickyHeader: PropTypes.bool,

  sx: PropTypes.object,
}

export default Table;