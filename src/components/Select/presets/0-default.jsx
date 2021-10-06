import * as React from 'react';
import Select from '../Select';
import MenuItem from '../../MenuItem/MenuItem';

export default (
  <Select width="400px" uxpId="Select-1" label="label">
    <MenuItem uxpId="MenuItem-1" value="temp-value-1">
      Menu Item 1
    </MenuItem>
    <MenuItem uxpId="MenuItem-2" value="temp-value-2">
      Menu Item 2
    </MenuItem>
    <MenuItem uxpId="MenuItem-3" value="temp-value-3">
      Menu Item 3
    </MenuItem>
  </Select>
);