module.exports = {
    components: {
      categories: [
        {
          name: 'Inputs',
          include: [
            //'src/components/Autocomplete/Autocomplete.js',
            'src/components/Button/Button.js',
            'src/components/ButtonGroup/ButtonGroup.js',
            'src/components/Checkbox/Checkbox.js',
            'src/components/Radio/Radio.js',
            'src/components/Rating/Rating.js',
            'src/components/Select/Select.js',
            'src/components/Switch/Switch.js',
            'src/components/IconButton/IconButton.js',
            'src/components/FloatingActionButton/FloatingActionButton.js',
            'src/components/Radio/Radio.js',
            'src/components/Rating/Rating.js',
            'src/components/Select/Select.js',
            // 'src/components/Slider/Slider.js',
            'src/components/Switch/Switch.js',
            'src/components/TextField/TextField.js',
            'src/components/ToggleButton/ToggleButton.js',
            'src/components/ToggleButtonGroup/ToggleButtonGroup.js',
          ],
        },
        { 
          name: 'Data Dispaly',
          include: [
            'src/components/Icon/Icon.js',
            'src/components/Avatar/Avatar.js',
            'src/components/Badge/Badge.js',
            'src/components/Icon/Icon.js',
            'src/components/List/List.js',
            'src/components/ListItem/ListItem.js',
            'src/components/ListItemAvatar/ListItemAvatar.js',
            'src/components/ListItemButton/ListItemButton.js',
            'src/components/ListItemIcon/ListItemIcon.js',
            'src/components/ListItemText/ListItemText.js',
            'src/components/ListSubheader/ListSubheader.js',
            'src/components/Tooltip/Tooltip.js',
            'src/components/Typography/Typography.js'
          ],
        },
        {
          name: 'Navigation',
          include: [
            'src/components/BottomNavigation/BottomNavigation.js',
            'src/components/BottomNavigationAction/BottomNavigationAction.js',
            'src/components/Breadcrumbs/Breadcrumbs.js',
            // 'src/components/Menu/Menu.js',
            'src/components/Link/Link.js',
            'src/components/MenuItem/MenuItem.js',
            'src/components/Toolbar/Toolbar.js',
          ]
        },
        {
          name: 'Form',
          include: [
            'src/components/FormControl/FormControl.js',
            'src/components/FormControlLabel/FormControlLabel.js',
            'src/components/FormGroup/FormGroup.js',
            'src/components/FormHelperText/FormHelperText.js',
            'src/components/FormLabel/FormLabel.js',
          ]  
        },
        {
          name: 'Layout',
          include: [
            'src/components/Box/Box.js'
          ]  
        },
        {
          name: 'Surfaces',
          include: [
            'src/components/AppBar/AppBar.js',
            'src/components/Paper/Paper.js',
          ]  
        }
      ],
      wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
      webpackConfig: 'uxpin.webpack.config.js',
    },
    name: 'material-ui-uxpin'
  };