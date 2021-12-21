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
            'src/components/CheckboxWithLabel/CheckboxWithLabel.js', 
            'src/components/CheckboxGroup/CheckboxGroup.js',
            'src/components/Collapse/Collapse.js',
            'src/components/IconButton/IconButton.js',
            'src/components/InputLabel/InputLabel.js',
            'src/components/FloatingActionButton/FloatingActionButton.js',
            'src/components/LoadingButton/LoadingButton.js',
            'src/components/Radio/Radio.js',
            'src/components/RadioWithLabel/RadioWithLabel.js',
            'src/components/RadioGroup/RadioGroup.js',
            'src/components/Rating/Rating.js',
            'src/components/Select/Select.js',
            'src/components/Slider/Slider.js',
            'src/components/FloatingActionButton/FloatingActionButton.js',
            'src/components/Radio/Radio.js',
            'src/components/Rating/Rating.js',
            'src/components/Select/Select.js',
            'src/components/Switch/Switch.js',
            'src/components/SwitchWithLabel/SwitchWithLabel.js',
            'src/components/SwitchGroup/SwitchGroup.js',
            'src/components/TextField/TextField.js',
            'src/components/ToggleButton/ToggleButton.js',
            'src/components/ToggleButtonGroup/ToggleButtonGroup.js',
          ],
        },
        { 
          name: 'Data Display',
          include: [
            'src/components/Avatar/Avatar.js',
            'src/components/Badge/Badge.js',
            'src/components/Chip/Chip.js',
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
            'src/components/Typography/Typography.js',
          ],
        },
        {
          name: 'Navigation',
          include: [
            'src/components/BottomNavigationAction/BottomNavigationAction.js',
            'src/components/Breadcrumbs/Breadcrumbs.js',
            'src/components/Menu/Menu.js',
            'src/components/Link/Link.js',
            'src/components/MenuItem/MenuItem.js',
            'src/components/Pagination/Pagination.js',
            'src/components/Stepper/Stepper.js',
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
            'src/components/Dialog/Dialog.js',
            "src/components/CircularProgress/CircularProgress.js",
            'src/components/DialogActions/DialogActions.js',
            'src/components/DialogContentText/DialogContentText.js',
            'src/components/DialogTitle/DialogTitle.js',
            'src/components/DialogContent/DialogContent.js',
            "src/components/LinearProgress/LinearProgress.js",
            'src/components/Snackbar/Snackbar.js',
            'src/components/Skeleton/Skeleton.js',
          ]
        },
        {
          name: 'Table',
          include: [
            'src/components/Table/Table.js',
            'src/components/TableCell/TableCell.js',
            'src/components/TableBody/TableBody.js',
            'src/components/TableHead/TableHead.js',
            'src/components/TableRow/TableRow.js',
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
            'src/components/Stack/Stack.js',
          ]  
        },
        {
          name: 'Surfaces',
          include: [
            'src/components/Accordion/Accordion.js',
            'src/components/AccordionActions/AccordionActions.js',
            'src/components/AccordionDetails/AccordionDetails.js',
            'src/components/AccordionSummary/AccordionSummary.js',
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