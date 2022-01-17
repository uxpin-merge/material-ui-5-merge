import React from 'react';
import Menu from '../Menu';
import MenuItem from "../../MenuItem/MenuItem";

export default (
  <Menu uxpId="1">
    <MenuItem uxpId="2">Profile</MenuItem>
    <MenuItem uxpId="3" divider={true}>My Account</MenuItem>
    <MenuItem uxpId="4">Logout</MenuItem>
  </Menu>
);
