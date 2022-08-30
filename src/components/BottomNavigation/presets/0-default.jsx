import * as React from 'react';
import BottomNavigation from '../BottomNavigation';
import BottomNavigationAction from '../../BottomNavigationAction/BottomNavigationAction';
import Icon from '../../Icon/Icon';

export default (
  <BottomNavigation uxpId="bottom-navigation-1">
      <BottomNavigationAction uxpId="bottom-navigation-action-2" label="Home" icon="home"/>
      <BottomNavigationAction uxpId="bottom-navigation-action-3" label="Recents" icon="restore" />
      <BottomNavigationAction uxpId="bottom-navigation-action-4" label="User" icon="person" />
  </BottomNavigation>
);