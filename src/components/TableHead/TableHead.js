import React from 'react';
import PropTypes from 'prop-types';
import TableHeadM from '@mui/material/TableHead';

function TableHead(props) {
  return (
    <TableHeadM {...props}>{props.children}</TableHeadM>
  )
}

TableHead.propTypes = {
  /**
   * The content of the TableHead, normally TableHeadHead and TableHeadHead.
   * @uxpinignoreprop
   * */
  children: PropTypes.node,

  classes: PropTypes.object,

  component: PropTypes.elementType,

  sx: PropTypes.object,
}

export default TableHead;