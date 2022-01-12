import React from 'react';
import MenuList from '../MenuList'
import Paper from '../../Paper/Paper';
import MenuItem from '../../MenuItem/MenuItem';

export default (
  <Paper uxpId='paper'>
    <MenuList uxpId='menu-list'>
      <MenuItem uxpId='menu-item-1'>Profile</MenuItem>
      <MenuItem uxpId='menu-item-2'>My account</MenuItem>
      <MenuItem uxpId='menu-item-3'>Logout</MenuItem>
    </MenuList>
  </Paper>
)