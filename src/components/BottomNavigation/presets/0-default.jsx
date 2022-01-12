import * as React from 'react';
import BottomNavigation from '../BottomNavigation';
import BottomNavigationAction from '../../BottomNavigationAction/BottomNavigationAction';
import Icon from '../../Icon/Icon';

export default (
  <BottomNavigation uxpId="bottom-navigation-1">
      <BottomNavigationAction uxpId="bottom-navigation-action-2" label="Home" icon={<Icon uxpId="2.1">home</Icon>} />
      <BottomNavigationAction uxpId="bottom-navigation-action-3" label="Recents" icon={<Icon uxpId="3.1">restore</Icon>} />
      <BottomNavigationAction uxpId="bottom-navigation-action-4" label="User" icon={<Icon uxpId="4.1">person</Icon>} />
  </BottomNavigation>
);