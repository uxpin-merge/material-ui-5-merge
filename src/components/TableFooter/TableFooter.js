import React from 'react';
import PropTypes from 'prop-types';
import TableFooterM from '@mui/material/TableFooter';

/**
 * @uxpindocurl https://mui.com/api/table-footer/
 */
function TableFooter(props) {
  return (
    <TableFooterM {...props}>{props.children}</TableFooterM>
  )
}

TableFooter.propTypes = {
  /**
   * The content of the TableFooter, normally TableFooterFooter and TableFooterFooter.
   * @uxpinignoreprop
   * */
  children: PropTypes.node,

  classes: PropTypes.object,

  component: PropTypes.elementType,

  sx: PropTypes.object,
}

export default TableFooter;