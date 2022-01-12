import React from 'react';
import PropTypes from 'prop-types';
import TableBodyM from '@mui/material/TableBody';

/**
 * @uxpindocurl https://mui.com/api/table-body/#main-content
 */
function TableBody(props) {
  return (
    <TableBodyM {...props}>{props.children}</TableBodyM>
  )
}

TableBody.propTypes = {
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

export default TableBody;