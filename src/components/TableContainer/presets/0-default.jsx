import * as React from 'react';
import TableContainer from '../TableContainer';
import Table from '../../Table/Table';
import TableBody from '../../TableBody/TableBody';
import TableCell from '../../TableCell/TableCell';
import TableHead from '../../TableHead/TableHead';
import TableRow from '../../TableRow/TableRow';

export default (
  <TableContainer uxpId='Table-Container-1'>
    <Table uxpId='Table-1'>
      <TableHead uxpId='Table-Head-1'>
        <TableRow uxpId='Table-Row-0'>
          <TableCell uxpId="Table-Cell-0-0" align='right'>Header 1</TableCell>
          <TableCell uxpId="Table-Cell-0-1" align='right'>Header 2</TableCell>
          <TableCell uxpId="Table-Cell-0-1" align='right'>Header 3</TableCell>
        </TableRow>
      </TableHead>
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
    </Table>
  </TableContainer>
);