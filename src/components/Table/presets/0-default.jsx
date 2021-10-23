import * as React from 'react';
import Table from '../Table';
import TableBody from '../../TableBody/TableBody';
import TableCell from '../../TableCell/TableCell';
import TableHead from '../../TableHead/TableHead';
import TableRow from '../../TableRow/TableRow';

export default (
  <Table uxpId='Table-1'>
    <TableHead uxpId='Table-Head-1'>
      <TableRow uxpId='Table-Row-0'>

        <TableCell uxpId="Table-Cell-0-0">Name</TableCell>
        <TableCell uxpId="Table-Cell-0-1">Username</TableCell>
        <TableCell uxpId="Table-Cell-0-2">Email</TableCell>

      </TableRow>
    </TableHead>
    <TableBody uxpId='Table-Body-1'>
      <TableRow uxpId='Table-Row-1'>

        <TableCell uxpId="Table-Cell-1-1">Jack</TableCell>
        <TableCell uxpId="Table-Cell-1-2">Rob</TableCell>
        <TableCell uxpId="Table-Cell-1-3">Evan</TableCell>
      </TableRow>
      <TableRow uxpId='Table-Row-2'>
        <TableCell uxpId="Table-Cell-2-1">jack@email.com</TableCell>
        <TableCell uxpId="Table-Cell-2-2">robert@email.com</TableCell>
        <TableCell uxpId="Table-Cell-2-3">evan@email.com</TableCell>

      </TableRow>
    </TableBody>
  </Table>
);