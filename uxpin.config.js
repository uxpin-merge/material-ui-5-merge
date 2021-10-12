const { Feedback } = require("@mui/icons-material");

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
            'src/components/IconButton/IconButton.js',
            'src/components/FloatingActionButton/FloatingActionButton.js',
            'src/components/Radio/Radio.js',
            'src/components/Rating/Rating.js',
            'src/components/Select/Select.js',
            // 'src/components/Slider/Slider.js',
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
            'src/components/Avatar/Avatar.js',
            'src/components/Badge/Badge.js',
            'src/components/Divider/Divider.js',
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
            'src/components/Tab/Tab.js',
            'src/components/Tabs/Tabs.js',
            'src/components/Toolbar/Toolbar.js',
          ]
        },
        {
          name: 'Feedback',
          include: [
            'src/components/Alert/Alert.js',
            'src/components/AlertTitle/AlertTitle.js',
            'src/components/Snackbar/Snackbar.js',
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
            'src/components/Box/Box.js',
            'src/components/Grid/Grid.js',
            'src/components/ImageList/ImageList.js',
            'src/components/ImageListItem/ImageListItem.js',
            'src/components/ImageListItemBar/ImageListItemBar.js',
          ]  
        },
        {
          name: 'Surfaces',
          include: [
            'src/components/AppBar/AppBar.js',
            'src/components/Card/Card.js',
            'src/components/CardActions/CardActions.js',
            'src/components/CardActionArea/CardActionArea.js',
            'src/components/CardContent/CardContent.js',
            'src/components/CardHeader/CardHeader.js',
            'src/components/CardMedia/CardMedia.js',
            'src/components/Paper/Paper.js',
          ]  
        },
        {
          name: "HTML Wrappers and Spacing",
          include: [
            "src/components/Image/Image.js",
          ]
        }
      ],
      wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
      webpackConfig: 'uxpin.webpack.config.js',
    },
    name: 'material-ui-uxpin'
  };