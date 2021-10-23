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
<<<<<<< HEAD
   * The content of the component, normally TableRow.
=======
   * The content of the TableHead, normally TableHeadHead and TableHeadHead.
>>>>>>> 23886ac99e49ea235e3131eabf0d95f38e8d7115
   * @uxpinignoreprop
   * */
  children: PropTypes.node,

<<<<<<< HEAD
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
=======
  classes: PropTypes.object,

  component: PropTypes.elementType,

>>>>>>> 23886ac99e49ea235e3131eabf0d95f38e8d7115
  sx: PropTypes.object,
}

export default TableHead;