import React from 'react';
import PropTypes from 'prop-types';
import TableContainerM from '@mui/material/TableContainer';

/**
 * @uxpindocurl https://mui.com/api/table-container/#main-content
 */
function TableContainer(props) {
  return (
    <TableContainerM {...props}>{props.children}</TableContainerM>
  )
}

TableContainer.propTypes = {
  /**
   * The content of the TableContainer, normally TableContainerContainer and TableContainerContainer.
   * @uxpinignoreprop
   * */
  children: PropTypes.node,

  classes: PropTypes.object,

  component: PropTypes.string,

  sx: PropTypes.object,
}

export default TableContainer;