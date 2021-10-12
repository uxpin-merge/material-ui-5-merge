import React from 'react';
import CardHeader from '../CardHeader';
import Avatar from '../../Avatar/Avatar';
import Icon from '../../Icon/Icon';
import IconButton from '../../IconButton/IconButton';

export default (
  <CardHeader
    uxpId='Card-Header-1'
    avatar={
      <Avatar uxpId="Avatar-1" sx={{ bgcolor: 'blue' }}>
        R
      </Avatar>
    }
    action={
      <IconButton uxpId="Icon-Button-1" ariaLabel="add accessibility text" >
        <Icon uxpId="Icon-1">home</Icon>
      </IconButton>
    }
    title="Shrimp and Chorizo Paella"
    subheader="September 14, 2016"
  />
);