import * as React from 'react';
import Select from '../Select';
import MenuItem from '../../MenuItem/MenuItem';

export default (
  <Select uxpId="Select-1" label="Role">
    <MenuItem uxpId="MenuItem-1" value="temp-value-1">
      Software Developer
    </MenuItem>
    <MenuItem uxpId="MenuItem-2" value="temp-value-2">
      Designer
    </MenuItem>
    <MenuItem uxpId="MenuItem-3" value="temp-value-3">
      Other
    </MenuItem>
  </Select>
);