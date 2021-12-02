import React from 'react';
import PropTypes from 'prop-types';
import TableCellM from '@mui/material/TableCell';

/**
 * @uxpindocurl https://mui.com/api/table-cell/#main-content
 */
function TableCell(props) {
  return (
    <TableCellM {...props}>{props.children}</TableCellM>
  )
}

TableCell.propTypes = {
  /**
   * The content of the TableCell, normally TableCellHead and TableCellBody.
   * @uxpinpropname Cell Data
   * */
  children: PropTypes.node,
  
  /**
   * Set the text-align on the table cell content. M
   * onetary or generally number fields should be right aligned 
   * as that allows you to add them up quickly in your head without having to worry about decimals.
   */
  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),

  /**
   * Set aria-sort direction.
   */
  sortDirection: PropTypes.oneOf(['asc', 'desc', 'false']),

  /**
   * Specify the cell type. 
   * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
   */
  variant: PropTypes.oneOf(['body', 'footer', 'head']),

  /**
   * Sets the padding applied to the cell. 
   * The prop defaults to the value ('default') inherited from the parent Table component.
   */
  padding: PropTypes.oneOf(['checkbox', 'none', 'normal']),

  /**
   * Specify the size of the cell. 
   * The prop defaults to the value ('medium') inherited from the parent Table component.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * Override or extend the styles applied to the component. See CSS API below for more details.
   * @uxpinignoreprop
   */
  classes: PropTypes.object,
  
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,

  /**
   * Set scope attribute.
   */
  scope: PropTypes.string,

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. 
   * See the `sx` page for more details.
   */
  sx: PropTypes.object,
}

export default TableCell;