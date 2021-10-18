import * as React from 'react';
import TableBody from '../TableBody';
import TableRow from '../../TableRow/TableRow';
import TableCell from '../../TableCell/TableCell';

export default (
  <TableBody uxpId='Table-Body-1'>
    <TableRow uxpId='Table-Row-1'>
      <TableCell uxpId="Table-Cell-1-1">Cell Data 1</TableCell>
      <TableCell uxpId="Table-Cell-1-2">Cell Data 2</TableCell>
      <TableCell uxpId="Table-Cell-1-3">Cell Data 3</TableCell>
    </TableRow>
    <TableRow uxpId='Table-Row-2'>
      <TableCell uxpId="Table-Cell-2-1">Cell Data 1</TableCell>
      <TableCell uxpId="Table-Cell-2-2">Cell Data 2</TableCell>
      <TableCell uxpId="Table-Cell-2-3">Cell Data 3</TableCell>
    </TableRow>
  </TableBody>
);