import * as React from 'react';
import List from '../List';
import ListItemAvatar from '../../ListItemAvatar/ListItemAvatar';
import ListSubheader from '../../ListSubheader/ListSubheader';
import ListItem from '../../ListItem/ListItem';
import ListItemButton from '../../ListItemButton/ListItemButton';
import ListItemIcon from '../../ListItemIcon/ListItemIcon';
import ListItemText from '../../ListItemText/ListItemText';
import Avatar from '../../Avatar/Avatar';
import Checkbox from '../../Checkbox/Checkbox';
import Icon from '../../Icon/Icon';

export default (
  <List uxpId='List-1'>
    <ListSubheader uxpId='List-Subheader-1'>List Subheader</ListSubheader>
    <ListItem uxpId='List-Item-1'>
      <ListItemButton uxpId='List-Item-Button-1'>
        <ListItemAvatar uxpId='List-Item-Avatar-1'>
          <Avatar uxpId='Avatar-1'>
            <Icon uxpId='Icon-1'>people</Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
          uxpId="List-item-text-1" 
          primary="List Item 1 PT" 
          secondary="List Item 1 ST"
        />
      </ListItemButton>
    </ListItem>
    <ListItem uxpId='List-Item-2'>
      <ListItemButton uxpId='List-Item-Button-2'>
      <ListItemIcon uxpId="List-Item-Icon-1">inbox</ListItemIcon>
        <ListItemText 
          uxpId="List-item-text-2" 
          primary="List Item 2 PT" 
          secondary="List Item 2 ST"
        />
      </ListItemButton>
    </ListItem>
  </List>
);