import * as React from 'react';
import ListItem from '../ListItem';
import ListItemButton from '../../ListItemButton/ListItemButton';
import ListItemIcon from '../../ListItemIcon/ListItemIcon';
import ListItemText from '../../ListItemText/ListItemText';
import Icon from '../../Icon/Icon';
import IconButton from '../../IconButton/IconButton';

export default (
  <ListItem 
    uxpId="List-Item-1"
    disablePadding
    secondaryAction={
      <IconButton uxpId="Icon-Button-1" ariaLabel="add accessibility text" >
        <Icon uxpId="Icon-1">comment</Icon>
      </IconButton>
    }
  >
    <ListItemButton uxpId="List-Item-Button-1">
      <ListItemIcon uxpId="List-Item-Icon-1">inbox</ListItemIcon>
      <ListItemText 
        uxpId="List-item-text-1" 
        primary="Primary Text" 
        secondary="Secondary Text"
      />
    </ListItemButton>
  </ListItem>
);