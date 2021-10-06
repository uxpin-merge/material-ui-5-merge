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
            'src/components/TextField/TextField.js',
            'src/components/Tooltip/Tooltip.js'
          ],
        },
        { 
          name: 'Data Dispaly',
          include: [
            'src/components/Icon/Icon.js',
            'src/components/Avatar/Avatar.js',
            'src/components/Badge/Badge.js',
            'src/components/FormGroup/FormGroup.js',
            'src/components/Typography/Typography.js'
          ],
        },
        {
          name: 'Navigation',
          include: [
            'src/components/Toolbar/Toolbar.js',
          ]
        },
        {
          name: 'Form',
          include: [
            'src/components/FormControl/FormControl.js',
            'src/components/FormHelperText/FormHelperText.js',
            'src/components/FormLabel/FormLabel.js',
            'src/components/InputLabel/InputLabel.js',
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