module.exports = {
  components: {
    categories: [
      {
        name: 'Buttons',
        include: [
          'src/components/Button/Button.js',
          'src/components/ButtonGroup/ButtonGroup.js',
          'src/components/IconButton/IconButton.js',
          'src/components/FloatingActionButton/FloatingActionButton.js',
          'src/components/LoadingButton/LoadingButton.js',
          'src/components/SplitButton/SplitButton.js',
          'src/components/ToggleButton/ToggleButton.js',
          'src/components/ToggleButtonGroup/ToggleButtonGroup.js',
        ]
      },
      {
        name: 'Checkboxes',
        include: [
          'src/components/Checkbox/Checkbox.js',
          'src/components/CheckboxWithLabel/CheckboxWithLabel.js', 
          'src/components/CheckboxGroup/CheckboxGroup.js',
        ]
      },
      {
        name: 'Radio Buttons',
        include: [
          'src/components/Radio/Radio.js',
          'src/components/RadioWithLabel/RadioWithLabel.js',
          'src/components/RadioGroup/RadioGroup.js',
        ]
      },
      {
        name: 'Rating',
        include: [
          'src/components/Rating/Rating.js',
        ]
      },
      {
        name: 'Select',
        include: [
          'src/components/Select/Select.js',
        ]
      },
      {
        name: 'Switches',
        include: [
          'src/components/Switch/Switch.js',
          'src/components/SwitchWithLabel/SwitchWithLabel.js',
          'src/components/SwitchGroup/SwitchGroup.js',
        ]
      },
      {
        name: 'Text Field',
        include: [
          'src/components/TextField/TextField.js',
        ]
      },
      {
        name: 'Card',
        include: [
          'src/components/Card/Card.js',
          'src/components/CardActions/CardActions.js',
          'src/components/CardActionArea/CardActionArea.js',
          'src/components/CardContent/CardContent.js',
          'src/components/CardHeader/CardHeader.js',
          'src/components/CardMedia/CardMedia.js',
        ]
      },
      {
        name: 'Accordion',
        include: [
          'src/components/Accordion/Accordion.js',
          'src/components/AccordionActions/AccordionActions.js',
          'src/components/AccordionDetails/AccordionDetails.js',
          'src/components/AccordionSummary/AccordionSummary.js', 
        ]
      },
      {
        name: 'Paper',
        include: [
          'src/components/Paper/Paper.js',
        ]
      },
      {
        name: 'List',
        include: [
          'src/components/List/List.js',
          'src/components/ListItem/ListItem.js',
          'src/components/ListItemAvatar/ListItemAvatar.js',
          'src/components/ListItemButton/ListItemButton.js',
          'src/components/ListItemIcon/ListItemIcon.js',
          'src/components/ListItemText/ListItemText.js',
          'src/components/ListSubheader/ListSubheader.js',
        ]
      },
      {
        name: 'Progress',
        include: [
          'src/components/CircularProgress/CircularProgress.js',
          'src/components/LinearProgress/LinearProgress.js',
        ]
      },
      {
        name: 'Dialog',
        include: [
          'src/components/Dialog/Dialog.js',
          'src/components/DialogActions/DialogActions.js',
          'src/components/DialogContentText/DialogContentText.js',
          'src/components/DialogTitle/DialogTitle.js',
          'src/components/DialogContent/DialogContent.js',
        ]
      },
      {
        name: 'Table',
        include: [
          'src/components/Table/Table.js',
          'src/components/TableCell/TableCell.js',
          'src/components/TableContainer/TableContainer.js',
          'src/components/TableBody/TableBody.js',
          'src/components/TableFooter/TableFooter.js',
          'src/components/TableHead/TableHead.js',
          'src/components/TableRow/TableRow.js',
        ]
      },
      {
        name: 'Navigation',
        include: [
          'src/components/AppBar/AppBar.js',
          'src/components/BottomNavigation/BottomNavigation.js',
          'src/components/BottomNavigationAction/BottomNavigationAction.js',
          'src/components/Breadcrumbs/Breadcrumbs.js',
          'src/components/Drawer/Drawer.js',
          'src/components/Menu/Menu.js',
          'src/components/Link/Link.js',
          'src/components/MenuList/MenuList.js',
          'src/components/MenuItem/MenuItem.js',
          'src/components/Pagination/Pagination.js',
          'src/components/Stepper/Stepper.js',
          'src/components/Tab/Tab.js',
          'src/components/Tabs/Tabs.js',
        ]
      },
      { 
        name: 'Data Display',
        include: [
          'src/components/Avatar/Avatar.js',
          'src/components/AvatarGroup/AvatarGroup.js',
          'src/components/Badge/Badge.js',
          'src/components/Chip/Chip.js',
          'src/components/Divider/Divider.js',
          'src/components/Icon/Icon.js',
          'src/components/Tooltip/Tooltip.js',
          'src/components/Typography/Typography.js',
        ],
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
          'src/components/Container/Container.js',
          'src/components/Grid/Grid.js',
          'src/components/ImageList/ImageList.js',
          'src/components/ImageListItem/ImageListItem.js',
          'src/components/ImageListItemBar/ImageListItemBar.js',
          'src/components/Stack/Stack.js',
        ]  
      },
      {
        name: 'Miscellaneous',
        include: [
          'src/components/Alert/Alert.js',
          'src/components/AlertTitle/AlertTitle.js',
          // 'src/components/Autocomplete/Autocomplete.js',
          'src/components/Backdrop/Backdrop.js',
          'src/components/Collapse/Collapse.js',
          'src/components/DatePicker/DatePicker.js',
          "src/components/Image/Image.js",
          'src/components/InputLabel/InputLabel.js',   
          'src/components/Skeleton/Skeleton.js',
          'src/components/Slider/Slider.js',
          'src/components/Snackbar/Snackbar.js',
          'src/components/Toolbar/Toolbar.js',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'uxpin.webpack.config.js',
  },
  name: 'material-ui-uxpin'
};